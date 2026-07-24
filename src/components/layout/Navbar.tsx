import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "../common/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "../../constants/navigation";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl mt-5 will-change-transform">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-extrabold text-[#6C4CF6]"
                >
                    <div className="flex items-center gap-3">

                        <img
                            src={logo}
                            alt="Social Orbit"
                            className="h-11 w-11 rounded-full object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />

                        <span className="text-2xl font-extrabold tracking-tight">
                            Social
                            <span className="text-[#6C4CF6]">
                                {" "}Orbit
                            </span>
                        </span>

                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-[#6C4CF6]"
                                    : "text-gray-700 transition hover:text-[#6C4CF6]"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <button className="rounded-full bg-[#6C4CF6] px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-[#5a3be7]">
                        Get Started
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.25 }}
                        className="mx-5 mt-3 rounded-3xl border border-white/20 bg-white/90 p-8 shadow-xl backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-semibold text-[#6C4CF6]"
                                            : "text-gray-700"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            <button className="rounded-full bg-[#6C4CF6] py-3 text-white">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}