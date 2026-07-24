import { memo } from "react";

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
    dark?: boolean;
}

const Counter = memo(function Counter({
    end,
    suffix = "",
    label,
    dark = false,
}: CounterProps) {
    return (
        <div className={`rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md ${dark ? "border-white/5 bg-white/[0.04] backdrop-blur-sm hover:border-[#6C4CF6]/30 hover:bg-white/[0.06]" : "border-violet-100 bg-gradient-to-br from-violet-50 to-white"}`}>
            <h2 className="text-4xl font-bold text-[#6C4CF6]">
                {end}
                {suffix}
            </h2>
            <p className={`mt-2 text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>{label}</p>
        </div>
    );
});

export default Counter;