import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Counter from "../common/Counter";

export default function WhyChoose() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-150, 150], [12, -12]);
    const rotateY = useTransform(x, [-150, 150], [-12, 12]);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const resetPosition = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-violet-50/50 py-28">
            <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-300/20 blur-[140px]" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-300/15 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                            Why Choose Social Orbit
                        </span>

                        <h2 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
                            Building Software
                            <span className="block text-[#6C4CF6]">
                                That Powers Businesses.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                            We combine cutting-edge technologies, creative design, and
                            business strategy to deliver scalable digital solutions that help
                            companies grow faster.
                        </p>

                        <div className="mt-14 grid grid-cols-2 gap-5">
                            <Counter end={100} suffix="+" label="Projects Delivered" />
                            <Counter end={50} suffix="+" label="Happy Clients" />
                            <Counter end={98} suffix="%" label="Client Satisfaction" />
                            <Counter end={24} suffix="/7" label="Technical Support" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center will-change-transform"
                    >
                        <div className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-500/15 to-indigo-500/15 blur-[140px]" />

                        <motion.div
                            onMouseMove={handleMove}
                            onMouseLeave={resetPosition}
                            style={{
                                rotateX,
                                rotateY,
                                transformPerspective: 1200,
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/30 bg-white/70 p-8 shadow-[0_40px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl will-change-transform"
                        >
                            <div className="absolute inset-0 opacity-20">
                                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,#7c3aed_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#4f46e5_0%,transparent_45%)]" />
                            </div>

                            <div className="relative">
                                <div className="mb-8 flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <div className="h-3 w-3 rounded-full bg-green-400" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Analytics Dashboard
                                        </h3>
                                        <p className="text-gray-500">
                                            Live Business Overview
                                        </p>
                                    </div>
                                    <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-[#6C4CF6]">
                                        Online
                                    </div>
                                </div>

                                <div className="mt-14 h-64">
                                    <svg viewBox="0 0 560 200" className="h-full w-full">
                                        <defs>
                                            <linearGradient id="gradient" x1="0" x2="1">
                                                <stop offset="0%" stopColor="#7C3AED" />
                                                <stop offset="100%" stopColor="#4F46E5" />
                                            </linearGradient>
                                        </defs>

                                        <motion.path
                                            d="M20 170 C80 130 120 110 180 120 C250 130 290 50 360 70 C420 90 470 30 540 60"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                        />

                                        <motion.circle
                                            cx="540"
                                            cy="60"
                                            r="7"
                                            fill="#6C4CF6"
                                            animate={{ scale: [1, 1.4, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        />
                                    </svg>
                                </div>

                                <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
                                    {[
                                        { title: "Client Rating", value: "★ 4.9" },
                                        { title: "Projects", value: "100+" },
                                        { title: "Clients", value: "50+" },
                                        { title: "Success Rate", value: "98%" },
                                    ].map((item) => (
                                        <motion.div
                                            key={item.title}
                                            whileHover={{ y: -6, scale: 1.03 }}
                                            className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm"
                                        >
                                            <p className="text-sm text-gray-500">{item.title}</p>
                                            <h3 className="mt-3 text-3xl font-bold text-[#6C4CF6]">{item.value}</h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}