import { motion } from "framer-motion";

interface Props {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
}: Props) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#6C4CF6] hover:shadow-xl"
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100">
                <Icon className="text-[#6C4CF6]" size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
                {description}
            </p>
        </motion.div>
    );
}