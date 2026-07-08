interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
}

export default function Counter({
    end,
    suffix = "",
    label,
}: CounterProps) {
    return (
        <div className="rounded-xl border p-6">
            <h2 className="text-4xl font-bold">
                {end}
                {suffix}
            </h2>

            <p>{label}</p>
        </div>
    );
}