import { motion } from "framer-motion";
import { services } from "../../constants/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-400 via-[#6C4CF6] to-indigo-600 py-28">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/15 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -bottom-24 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-violet-100 backdrop-blur-sm">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-white">
                        Everything Your Business
                        <span className="block text-violet-200">
                            Needs to Grow
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-violet-100">
                        We combine strategy, creativity, and technology to deliver
                        digital solutions that help businesses grow faster.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
