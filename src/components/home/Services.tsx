import { motion } from "framer-motion";
import { services } from "../../constants/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
                        Everything Your Business
                        <span className="block text-[#6C4CF6]">
                            Needs to Grow
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
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