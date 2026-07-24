import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function createIcon(paths: string[], viewBox = "0 0 24 24") {
    return ({ size = 24, className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewBox}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {paths.map((d, i) => (
                <path key={i} d={d} />
            ))}
        </svg>
    );
}

export const Menu = createIcon(["M4 6h16", "M4 12h16", "M4 18h16"]);
export const X = createIcon(["M18 6 6 18", "M6 6l12 12"]);

export const Mail = createIcon([
    "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6m20 0-8 5-8-5",
]);
export const MapPin = createIcon([
    "M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z",
    "M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
]);
export const Phone = createIcon([
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z",
]);

export const ArrowRight = createIcon(["M5 12h14", "M12 5l7 7-7 7"]);
export const PlayCircle = createIcon([
    "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    "M10 8l6 4-6 4V8Z",
]);
export const ArrowUpRight = createIcon(["M7 7h10v10", "M7 17 17 7"]);

export const Code2 = createIcon([
    "M18 20a2 2 0 0 0 2-2V8l-7-5H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12Z",
    "M14 3v5h5",
]);
export const Globe = createIcon([
    "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    "M2 12h20",
    "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z",
]);
export const Smartphone = createIcon([
    "M10 2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
    "M12 18h0",
]);
export const Palette = createIcon([
    "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3-.5 4-2 0 0 1-2 2-3 .5-.7 2-2 3-2 2 0 3-1 3-3 0-5.5-4.5-10-10-10Z",
    "M7 13h0",
    "M10 9h0",
    "M14 9h0",
    "M17 13h0",
]);
export const Megaphone = createIcon([
    "M21 14V6a1 1 0 0 0-1-1H6l-4 5 4 5h14a1 1 0 0 0 1-1Z",
    "M16 14v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
]);
export const Search = createIcon([
    "M19 19l-4-4",
    "M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z",
]);

export const CheckCircle = createIcon([
    "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    "M9 12l2 2 4-4",
]);
export const AlertCircle = createIcon([
    "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    "M12 8v4",
    "M12 16h0",
]);
export const Loader2 = createIcon([
    "M21 12a9 9 0 1 1-6.2-8.5",
]);

export const ShieldCheck = createIcon([
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    "M9 12l2 2 4-4",
]);
export const Rocket = createIcon([
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z",
    "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z",
    "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
]);
export const Clock3 = createIcon([
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z",
    "M12 6v6l4 2",
]);
export const Users = createIcon([
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    "M22 21v-2a4 4 0 0 0-3-3.87",
    "M16 3.13a4 4 0 0 1 0 7.75",
]);
export const Sparkles = createIcon([
    "M12 3l1.6 4.8L18 9l-4.4 1.2L12 15l-1.6-4.8L6 9l4.4-1.2L12 3Z",
    "M5 17l1.4 2.6L9 21l-2.6 1.4L5 25l-1.4-2.6L1 21l2.6-1.4L5 17Z",
    "M19 13l.6 1.8L22 16l-2.4.6L19 19l-.6-2.4L16 16l2.4-.6L19 13Z",
]);
export const Headset = createIcon([
    "M4 14h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1",
    "M20 14h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1",
    "M6 14V6a6 6 0 0 1 12 0v8",
    "M10 18h4",
    "M9 18v2a3 3 0 0 0 6 0v-2",
]);

export const Check = createIcon(["M20 6 9 17l-5-5"]);

export const BookOpen = createIcon([
    "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z",
    "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z",
]);
export const Target = createIcon([
    "M12 2a10 10 0 1 0 10 10",
    "M12 6a6 6 0 1 0 6 6",
    "M12 10a2 2 0 1 0 2 2",
]);
export const CheckCircle2 = createIcon([
    "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    "M9 12l2 2 4-4",
]);
export const Lightbulb = createIcon([
    "M9 18h6",
    "M10 22h4",
    "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.71.71 1.18 1.57 1.41 2.5",
]);
