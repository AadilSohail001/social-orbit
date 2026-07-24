import { Link, NavLink } from "react-router";
import { Mail, MapPin, Phone } from "../common/Icons";
import { InstagramIcon, FacebookIcon, LinkedInIcon } from "../common/SocialIcons";
import { navigation } from "../../constants/navigation";
import logo from "../../assets/logo.png";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/social_orbit3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: InstagramIcon,
        className:
            "bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 hover:shadow-pink-500/30",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61582968458295",
        icon: FacebookIcon,
        className: "bg-[#1877F2] hover:shadow-[#1877F2]/30",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/social-orbittt/",
        icon: LinkedInIcon,
        className: "bg-[#0A66C2] hover:shadow-[#0A66C2]/30",
    },
];

export default function Footer() {
    return (
        <footer className="relative mt-16 overflow-hidden border-t border-[#6C4CF6]/20 bg-gradient-to-br from-[#0B0B1A] via-[#111128] to-[#1A1A3E]">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-[#6C4CF6]/10 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Social Orbit"
                                className="h-11 w-11 rounded-full object-cover ring-2 ring-[#6C4CF6]/30"
                                loading="lazy"
                            />
                            <span className="text-2xl font-extrabold tracking-tight text-white">
                                Social
                                <span className="text-[#6C4CF6]"> Orbit</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-md text-base leading-7 text-gray-400">
                            We build digital experiences that drive growth —
                            from websites and software to branding and marketing.
                        </p>

                        <div className="mt-8 flex gap-3">
                            {socialLinks.map(({ name, href, icon: Icon, className }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl ${className}`}
                                >
                                    <Icon className="h-[18px] w-[18px]" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/[0.04] px-5 py-4 text-sm shadow-lg shadow-black/20 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-3">
                            <p className="font-medium text-gray-300">
                                © {new Date().getFullYear()} Social Orbit. All rights reserved.
                            </p>
                            <span className="hidden h-4 w-px bg-white/10 sm:block" />
                            <p className="text-gray-500">
                                Crafted with care in{" "}
                                <span className="font-semibold text-gray-300">
                                    Islamabad, Pakistan
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "font-medium text-[#6C4CF6]"
                                                : "text-gray-400 transition-colors hover:text-white"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Contact
                        </h3>
                        <ul className="mt-5 space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 rounded-lg bg-[#6C4CF6]/10 p-2 text-[#6C4CF6]">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <span className="text-gray-400">
                                    G-15, Islamabad, Pakistan 44150
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 rounded-lg bg-[#6C4CF6]/10 p-2 text-[#6C4CF6]">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <a
                                    href="tel:+923495289548"
                                    className="text-gray-400 transition-colors hover:text-[#6C4CF6]"
                                >
                                    +92 349 5289548
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 rounded-lg bg-[#6C4CF6]/10 p-2 text-[#6C4CF6]">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <a
                                    href="mailto:socialorbit42@gmail.com"
                                    className="text-gray-400 transition-colors hover:text-[#6C4CF6]"
                                >
                                    socialorbit42@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
