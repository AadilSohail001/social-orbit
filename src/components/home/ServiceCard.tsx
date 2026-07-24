import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "../common/Icons";

interface Props {
    icon: React.ElementType;
    title: string;
    description: string;
}

const ServiceCard = memo(function ServiceCard({
    icon: Icon,
    title,
    description,
}: Props) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl shadow-indigo-950/20 backdrop-blur-sm transition-all duration-300 hover:border-violet-200 hover:bg-white/15 hover:shadow-2xl hover:shadow-indigo-950/30 will-change-transform"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-200/20 transition-all duration-300 group-hover:bg-white">
                <Icon
                    size={30}
                    className="text-violet-100 transition-colors duration-300 group-hover:text-[#6C4CF6]"
                />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-violet-100/90">
                {description}
            </p>

            <button className="mt-8 flex items-center gap-2 font-semibold text-violet-100 transition-colors duration-300 group-hover:text-white">
                Learn More
                <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            </button>
        </motion.div>
    );
});

export default ServiceCard;
