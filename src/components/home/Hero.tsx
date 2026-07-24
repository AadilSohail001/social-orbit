import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "../common/Icons";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50/60 to-indigo-100/40">
            <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 pt-20 lg:flex-row">

                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 max-w-2xl"
                >
                    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
                        We Build
                        <span className="block text-[#6C4CF6]">Digital Experiences</span>
                        That Drive Growth.
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Social Orbit helps startups and businesses create
                        beautiful websites, scalable software solutions,
                        branding strategies, and digital marketing campaigns
                        that generate real business results.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <button className="flex items-center gap-2 rounded-full bg-[#6C4CF6] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6C4CF6]/30 will-change-transform">
                            Get Started
                            <ArrowRight size={20} />
                        </button>
                        <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-[#6C4CF6] hover:text-[#6C4CF6] will-change-transform">
                            <PlayCircle size={20} />
                            Our Work
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#6C4CF6]">100+</h2>
                            <p className="text-gray-500">Projects Delivered</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#6C4CF6]">50+</h2>
                            <p className="text-gray-500">Happy Clients</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#6C4CF6]">98%</h2>
                            <p className="text-gray-500">Client Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}

                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative mt-20 w-full max-w-xl lg:mt-0 will-change-transform"
                >
                    <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                        <div className="mb-5 flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-xl bg-violet-50 p-4">
                                <p className="font-mono text-sm font-semibold text-[#6C4CF6]">&lt;SocialOrbit /&gt;</p>
                            </div>
                            <div className="rounded-xl bg-indigo-50 p-4">
                                <p className="font-mono text-sm text-gray-700">const success = innovation + strategy;</p>
                            </div>
                            <div className="rounded-xl bg-violet-50 p-4">
                                <p className="font-mono text-sm text-gray-700">Deploying modern web solutions...</p>
                            </div>
                            <div className="rounded-xl bg-indigo-50 p-4">
                                <p className="font-mono text-sm font-semibold text-green-600">✔ Project Ready</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}