import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "../components/common/Icons";
import { InstagramIcon, FacebookIcon, LinkedInIcon } from "../components/common/SocialIcons";
import { sendEmail } from "../services/email";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

type Status = "idle" | "sending" | "success" | "error";

const contactInfo = [
    {
        icon: MapPin,
        label: "Address",
        value: "G-15, Islamabad, Pakistan 44150",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92 349 5289548",
        href: "tel:+923495289548",
    },
    {
        icon: Mail,
        label: "Email",
        value: "socialorbit42@gmail.com",
        href: "mailto:socialorbit42@gmail.com",
    },
];

const socialLinks = [
    {
        href: "https://www.instagram.com/social_orbit3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: InstagramIcon,
        className: "bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61582968458295",
        icon: FacebookIcon,
        className: "bg-[#1877F2]",
    },
    {
        href: "https://www.linkedin.com/company/social-orbittt/",
        icon: LinkedInIcon,
        className: "bg-[#0A66C2]",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Contact() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validate = useCallback((): FormErrors => {
        const errs: FormErrors = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) {
            errs.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = "Invalid email format";
        }
        if (!form.subject.trim()) errs.subject = "Subject is required";
        if (!form.message.trim()) {
            errs.message = "Message is required";
        } else if (form.message.trim().length < 10) {
            errs.message = "Message must be at least 10 characters";
        }
        return errs;
    }, [form]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setStatus("sending");
        setErrorMessage("");

        try {
            await sendEmail(form);
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again later.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    }, [form, validate]);

    const update = useCallback((field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    }, []);

    const inputClass = (field: keyof FormErrors) =>
        `w-full rounded-xl border px-5 py-4 outline-none transition-all duration-300 focus:shadow-md ${errors[field]
            ? "border-red-300 bg-red-50/50 focus:border-red-400 focus:bg-white"
            : "border-violet-100/50 bg-white/50 focus:border-[#6C4CF6] focus:bg-white focus:ring-2 focus:ring-[#6C4CF6]/10"
        }`;

    return (
        <MainLayout>
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-indigo-50/30 pt-44 pb-24">
                <div aria-hidden className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-[#6C4CF6]/10 blur-[160px]" />
                <div aria-hidden className="pointer-events-none absolute -right-24 top-60 h-96 w-96 rounded-full bg-indigo-400/15 blur-[160px]" />
                <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-300/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mx-auto mb-16 max-w-2xl text-center"
                    >
                        <span className="inline-block rounded-full border border-violet-200/60 bg-violet-100/80 px-5 py-2 text-sm font-semibold text-[#6C4CF6] backdrop-blur-sm">
                            Contact Us
                        </span>
                        <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 lg:text-6xl">
                            Let's Build Something{" "}
                            <span className="bg-gradient-to-r from-[#6C4CF6] to-indigo-500 bg-clip-text text-transparent">Amazing</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                            We'd love to hear about your project. Reach out through any of the
                            channels below and our team will get back to you as soon as possible.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid gap-10 lg:grid-cols-2"
                    >
                        <motion.div variants={itemVariants} className="group">
                            <div className="rounded-[32px] border border-white/30 bg-white/75 p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_12px_50px_rgba(108,76,246,0.08)]">
                                <h2 className="mb-2 text-3xl font-bold text-gray-900">Get In Touch</h2>
                                <p className="mb-10 text-gray-500">Here's how you can reach us</p>

                                <div className="space-y-6">
                                    {contactInfo.map((item) => (
                                        <div key={item.label} className="group/item flex items-start gap-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 transition-all duration-300 group-hover/item:bg-[#6C4CF6] group-hover/item:shadow-lg group-hover/item:shadow-[#6C4CF6]/20">
                                                <item.icon className="h-5 w-5 text-[#6C4CF6] transition-colors duration-300 group-hover/item:text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">{item.label}</h3>
                                                {item.href ? (
                                                    <a href={item.href} className="mt-0.5 block text-lg font-semibold text-gray-900 transition-colors duration-200 hover:text-[#6C4CF6]">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-0.5 text-lg font-medium text-gray-800">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative my-10">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-violet-100/60" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900">Follow Us</h3>
                                    <p className="mb-6 text-sm text-gray-500">Stay connected on social media</p>
                                    <div className="flex gap-4">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl ${link.className}`}
                                            >
                                                <link.icon className="h-5 w-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="rounded-[32px] border border-white/30 bg-white/75 p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_12px_50px_rgba(108,76,246,0.08)]">
                                <h2 className="mb-2 text-3xl font-bold text-gray-900">Send Us a Message</h2>
                                <p className="mb-10 text-gray-500">We typically respond within 24 hours</p>

                                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={form.name}
                                            onChange={(e) => update("name", e.target.value)}
                                            className={inputClass("name")}
                                        />
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500"
                                            >
                                                <AlertCircle size={14} />
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={form.email}
                                            onChange={(e) => update("email", e.target.value)}
                                            className={inputClass("email")}
                                        />
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500"
                                            >
                                                <AlertCircle size={14} />
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="Project Inquiry"
                                            value={form.subject}
                                            onChange={(e) => update("subject", e.target.value)}
                                            className={inputClass("subject")}
                                        />
                                        {errors.subject && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500"
                                            >
                                                <AlertCircle size={14} />
                                                {errors.subject}
                                            </motion.p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            rows={6}
                                            placeholder="Tell us about your project..."
                                            value={form.message}
                                            onChange={(e) => update("message", e.target.value)}
                                            className={inputClass("message")}
                                        />
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500"
                                            >
                                                <AlertCircle size={14} />
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700"
                                        >
                                            <CheckCircle size={18} />
                                            Message sent successfully! We'll get back to you soon.
                                        </motion.div>
                                    )}

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
                                        >
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#6C4CF6] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#5938f5] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "sending" ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
