import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Target,
    Rocket,
    Globe,
    Smartphone,
    Palette,
    Code2,
    Cloud,
    Database,
    Server,
    PhoneCall,
    TrendingUp,
    CheckCircle2,
    Lightbulb,
    ShieldCheck,
    Users,
    Sparkles,
} from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import Counter from "../components/common/Counter";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Modern, responsive, and high-performance websites and web applications built with the latest technologies.",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Cross-platform mobile applications delivering seamless experiences on Android and iOS.",
    },
    {
        icon: Palette,
        title: "UI / UX Design",
        description:
            "Beautiful and intuitive user interfaces focused on usability, accessibility, and user satisfaction.",
    },
    {
        icon: Code2,
        title: "Custom Software",
        description:
            "Tailor-made software solutions designed specifically around your business requirements.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "Secure cloud deployment, maintenance, scalability, and infrastructure management.",
    },
    {
        icon: TrendingUp,
        title: "Digital Transformation",
        description:
            "Helping organizations embrace technology to improve productivity and accelerate business growth.",
    },
];

const values = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We embrace creativity and modern technologies to build future-ready digital solutions.",
    },
    {
        icon: ShieldCheck,
        title: "Quality",
        description:
            "Every project is developed with clean architecture, high standards, and attention to detail.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We work closely with our clients, ensuring transparency and long-term partnerships.",
    },
    {
        icon: Sparkles,
        title: "Integrity",
        description:
            "Honesty, trust, and accountability are at the core of everything we deliver.",
    },
];

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Supabase",
    "Firebase",
    "Flutter",
    "Tailwind CSS",
    "AWS",
    "Git",
    "GitHub",
    "Docker",
];

export default function About() {
    return (
        <MainLayout>

            {/* HERO */}

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50 to-white pt-44 pb-32">

                {/* Background Glow */}

                <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-400/20 blur-[140px]" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                        >

                            <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                                About Social Orbit
                            </span>

                            <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 lg:text-7xl">

                                Building

                                <span className="block text-[#6C4CF6]">
                                    Innovative
                                </span>

                                Digital Solutions

                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

                                At Social Orbit, we help startups, businesses,
                                and organizations transform ideas into powerful
                                digital products. Our team combines creativity,
                                technology, and strategy to deliver software
                                solutions that create measurable impact.

                            </p>

                            <div className="mt-12 flex flex-wrap gap-5">

                                <Link
                                    to="/contact"
                                    className="flex items-center gap-3 rounded-full bg-[#6C4CF6] px-8 py-4 font-semibold text-white transition hover:scale-105"
                                >
                                    Contact Us
                                    <ArrowRight size={20} />
                                </Link>

                                <Link
                                    to="/services"
                                    className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:border-[#6C4CF6] hover:text-[#6C4CF6]"
                                >
                                    Our Services
                                </Link>

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .9 }}
                            className="relative flex justify-center"
                        >

                            {/* Glow */}

                            <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-300/20 blur-[120px]" />

                            {/* Card */}

                            <motion.div
                                whileHover={{
                                    rotate: -2,
                                    scale: 1.02,
                                }}
                                className="relative rounded-[40px] border border-white/30 bg-white/70 p-12 shadow-[0_40px_80px_rgba(0,0,0,.12)] backdrop-blur-2xl"
                            >

                                <img
                                    src={logo}
                                    alt="Social Orbit"
                                    className="mx-auto h-36 w-36 rounded-full shadow-xl"
                                />

                                <h2 className="mt-8 text-center text-4xl font-black">

                                    Social

                                    <span className="text-[#6C4CF6]">

                                        {" "}Orbit

                                    </span>

                                </h2>

                                <p className="mt-4 max-w-sm text-center text-gray-600">

                                    Empowering businesses through modern web
                                    development, mobile applications,
                                    UI/UX design, and custom software
                                    engineering.

                                </p>

                                {/* Mini Cards */}

                                <div className="mt-10 grid grid-cols-2 gap-5">

                                    <div className="rounded-2xl bg-violet-50 p-5 text-center">

                                        <h3 className="text-3xl font-bold text-[#6C4CF6]">

                                            100+

                                        </h3>

                                        <p className="mt-2 text-sm text-gray-600">

                                            Projects

                                        </p>

                                    </div>

                                    <div className="rounded-2xl bg-violet-50 p-5 text-center">

                                        <h3 className="text-3xl font-bold text-[#6C4CF6]">

                                            50+

                                        </h3>

                                        <p className="mt-2 text-sm text-gray-600">

                                            Clients

                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
}
{/* ================= OUR STORY ================= */ }

<section className="bg-white py-28">

    <div className="mx-auto max-w-7xl px-6">

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
        >

            <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                Our Story
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
                From Vision to Reality
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

                Social Orbit was founded with one goal —
                helping businesses leverage technology to
                grow faster. We believe every ambitious idea
                deserves exceptional execution.

                <br />
                <br />

                From responsive websites and scalable web
                applications to mobile apps and enterprise
                software, we transform ideas into digital
                products that deliver measurable business
                value.

            </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <motion.div

                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7 }}
                viewport={{ once: true }}

                whileHover={{
                    y: -8,
                }}

                className="rounded-[32px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-10 shadow-lg"

            >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6C4CF6] text-white">

                    <Target size={32} />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">

                    Our Mission

                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">

                    To empower startups, businesses,
                    and organizations through innovative,
                    scalable, and reliable software
                    solutions that improve efficiency,
                    strengthen digital presence,
                    and accelerate growth.

                </p>

            </motion.div>
            {/* ================= SERVICES ================= */}

            <section className="bg-gray-50 py-28">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                            What We Do
                        </span>

                        <h2 className="mt-6 text-5xl font-black text-gray-900">

                            Technology Services
                            <span className="block text-[#6C4CF6]">
                                Built Around Your Business
                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-gray-600">

                            We deliver end-to-end software solutions that
                            combine creativity, engineering excellence,
                            and business strategy to help companies
                            innovate, scale, and succeed.

                        </p>

                    </motion.div>

                    {/* Service Cards */}

                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <motion.div

                                    key={service.title}

                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    transition={{
                                        duration: .6,
                                        delay: index * .08,
                                    }}

                                    viewport={{ once: true }}

                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}

                                    className="group rounded-[30px] border border-violet-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#6C4CF6] hover:shadow-2xl"

                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-[#6C4CF6] transition-all duration-300 group-hover:bg-[#6C4CF6] group-hover:text-white">

                                        <Icon size={30} />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold text-gray-900">

                                        {service.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-600">

                                        {service.description}

                                    </p>

                                    <button className="mt-8 font-semibold text-[#6C4CF6] transition group-hover:translate-x-2">

                                        Learn More →

                                    </button>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ================= WHY CHOOSE US ================= */}

            <section className="bg-white py-28">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                                Why Choose Social Orbit
                            </span>

                            <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">

                                Your Trusted
                                <span className="block text-[#6C4CF6]">
                                    Technology Partner
                                </span>

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                We don't simply build software.
                                We build long-term partnerships,
                                delivering innovative solutions
                                that help businesses scale with confidence.

                            </p>

                            <div className="mt-12 space-y-5">

                                {[
                                    "Experienced Development Team",
                                    "Modern Technologies",
                                    "Scalable Solutions",
                                    "Transparent Communication",
                                    "On-Time Project Delivery",
                                    "24/7 Technical Support",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <CheckCircle2
                                            className="text-[#6C4CF6]"
                                            size={24}
                                        />

                                        <span className="text-lg text-gray-700">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            <div className="grid gap-6 sm:grid-cols-2">

                                {values.map((value, index) => {

                                    const Icon = value.icon;

                                    return (

                                        <motion.div

                                            key={value.title}

                                            initial={{
                                                opacity: 0,
                                                y: 40,
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            transition={{
                                                delay: index * .1,
                                                duration: .6,
                                            }}

                                            viewport={{ once: true }}

                                            whileHover={{
                                                y: -8,
                                                scale: 1.03,
                                            }}

                                            className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8 shadow-lg"

                                        >

                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6C4CF6] text-white">

                                                <Icon size={30} />

                                            </div>

                                            <h3 className="mt-8 text-2xl font-bold text-gray-900">

                                                {value.title}

                                            </h3>

                                            <p className="mt-5 leading-8 text-gray-600">

                                                {value.description}

                                            </p>

                                        </motion.div>

                                    );

                                })}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= TECHNOLOGIES ================= */}

            <section className="bg-gray-50 py-28">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                            Technologies We Use
                        </span>

                        <h2 className="mt-6 text-5xl font-black text-gray-900">

                            Modern Technologies

                            <span className="block text-[#6C4CF6]">

                                Powerful Solutions

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-gray-600">

                            We use trusted modern technologies to build
                            secure, scalable and high-performing
                            applications.

                        </p>

                    </motion.div>

                    {/* Tech Badges */}

                    <div className="mt-20 flex flex-wrap justify-center gap-5">

                        {technologies.map((tech, index) => (

                            <motion.div

                                key={tech}

                                initial={{
                                    opacity: 0,
                                    scale: .8,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}

                                transition={{
                                    delay: index * .05,
                                }}

                                viewport={{ once: true }}

                                whileHover={{
                                    y: -6,
                                    scale: 1.05,
                                }}

                                className="rounded-full border border-violet-100 bg-white px-7 py-4 font-semibold text-gray-700 shadow-md transition hover:border-[#6C4CF6] hover:text-[#6C4CF6]"

                            >

                                {tech}

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= COMPANY STATS ================= */}

            <section className="bg-white py-28">

                <div className="mx-auto max-w-7xl px-6">

                    <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}

                        className="mx-auto max-w-3xl text-center"

                    >

                        <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                            Our Achievements
                        </span>

                        <h2 className="mt-6 text-5xl font-black text-gray-900">

                            Trusted by Businesses

                        </h2>

                        <p className="mt-8 text-lg text-gray-600">

                            We measure our success through the success of
                            our clients and the long-term relationships we build.

                        </p>

                    </motion.div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <Counter
                            end={100}
                            suffix="+"
                            label="Projects Delivered"
                        />

                        <Counter
                            end={50}
                            suffix="+"
                            label="Happy Clients"
                        />

                        <Counter
                            end={98}
                            suffix="%"
                            label="Client Satisfaction"
                        />

                        <Counter
                            end={24}
                            suffix="/7"
                            label="Technical Support"
                        />

                    </div>

                </div>

            </section>

            {/* ================= CALL TO ACTION ================= */}

            <section className="relative overflow-hidden bg-[#6C4CF6] py-32">

                {/* Background Decorations */}

                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="absolute left-20 top-20 h-8 w-8 rounded-full bg-white/20"
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                    className="absolute right-24 bottom-24 h-10 w-10 rounded-full bg-white/10"
                />

                <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">

                            Let's Work Together

                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

                            Ready to Build
                            <span className="block">
                                Something Amazing?
                            </span>

                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-violet-100">

                            Whether you're launching a startup,
                            growing an existing business,
                            or transforming your digital presence,
                            Social Orbit is ready to turn your vision
                            into reality with innovative technology solutions.

                        </p>

                        {/* Buttons */}

                        <div className="mt-14 flex flex-wrap justify-center gap-6">

                            <Link
                                to="/contact"
                                className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#6C4CF6] transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                                <ArrowRight size={20} />
                            </Link>

                            <Link
                                to="/contact"
                                className="flex items-center gap-3 rounded-full bg-[#6C4CF6] px-8 py-4 font-semibold text-white transition hover:scale-105"
                            >
                                Contact Us
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* Vision */}

            <motion.div

                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7 }}
                viewport={{ once: true }}

                whileHover={{
                    y: -8,
                }}

                className="rounded-[32px] border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-10 shadow-lg"

            >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6C4CF6] text-white">

                    <Rocket size={32} />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">

                    Our Vision

                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">

                    To become a trusted technology
                    partner recognized globally for
                    delivering innovative digital
                    solutions while building long-term
                    relationships based on quality,
                    creativity, and excellence.

                </p>

            </motion.div>

        </div>

        {/* Quote */}

        <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}

            className="mt-24 rounded-[36px] bg-[#6C4CF6] p-14 text-center text-white"

        >

            <BookOpen
                className="mx-auto"
                size={42}
            />

            <h3 className="mt-6 text-3xl font-bold">

                "Technology is most powerful when it
                empowers people and businesses."

            </h3>

            <p className="mt-5 text-lg text-violet-100">

                Every project we build is guided by
                innovation, collaboration, and a
                commitment to delivering real value
                for our clients.

            </p>

        </motion.div>

    </div>

</section>
