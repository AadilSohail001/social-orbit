import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function ServiceCard({
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
            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-[#6C4CF6] hover:shadow-2xl"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-[#6C4CF6]">
                <Icon
                    size={30}
                    className="text-[#6C4CF6] transition group-hover:text-white"
                />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
                {description}
            </p>

            <button className="mt-8 flex items-center gap-2 font-semibold text-[#6C4CF6]">
                Learn More
                <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            </button>
        </motion.div>
    );
}