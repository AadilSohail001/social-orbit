import MainLayout from "../layouts/MainLayout";
import { Mail, Phone, MapPin } from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
    return (
        <MainLayout>
            <section className="bg-gray-50 pt-44 pb-24">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}

                    <div className="mx-auto mb-16 max-w-2xl text-center">

                        <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-[#6C4CF6]">
                            Contact Us
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-gray-900">
                            Let's Build Something Amazing
                        </h1>

                        <p className="mt-6 text-lg text-gray-600">
                            We'd love to hear about your project. Reach out through any of the
                            channels below and our team will get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2">

                        {/* Contact Information */}

                        <div className="rounded-3xl bg-white p-10 shadow-lg">

                            <h2 className="mb-8 text-3xl font-bold text-gray-900">
                                Get In Touch
                            </h2>

                            <div className="space-y-8">

                                {/* Address */}

                                <div className="flex items-start gap-5">
                                    <div className="rounded-xl bg-violet-100 p-3">
                                        <MapPin className="h-6 w-6 text-[#6C4CF6]" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Address
                                        </h3>

                                        <p className="mt-1 text-gray-600">
                                            G-15, Islamabad, Pakistan 44150
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}

                                <div className="flex items-start gap-5">
                                    <div className="rounded-xl bg-violet-100 p-3">
                                        <Phone className="h-6 w-6 text-[#6C4CF6]" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Phone
                                        </h3>

                                        <a
                                            href="tel:+923495289548"
                                            className="mt-1 block text-gray-600 hover:text-[#6C4CF6]"
                                        >
                                            +92 349 5289548
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}

                                <div className="flex items-start gap-5">
                                    <div className="rounded-xl bg-violet-100 p-3">
                                        <Mail className="h-6 w-6 text-[#6C4CF6]" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Email
                                        </h3>

                                        <a
                                            href="mailto:socialorbit@gmail.com"
                                            className="mt-1 block text-gray-600 hover:text-[#6C4CF6]"
                                        >
                                            socialorbit42@gmail.com
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/* Social Media */}

                            <div className="mt-12">
                                <h3 className="mb-5 text-xl font-semibold text-gray-900">
                                    Follow Us
                                </h3>

                                <div className="flex gap-5">

                                    <a
                                        href="https://www.instagram.com/social_orbit3?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                                    >
                                        <FaInstagram size={24} />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/profile.php?id=61582968458295"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                                    >
                                        <FaFacebookF size={22} />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/social-orbittt/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                                    >
                                        <FaLinkedinIn size={22} />
                                    </a>

                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}

                        <div className="rounded-3xl bg-white p-10 shadow-lg">

                            <h2 className="mb-8 text-3xl font-bold text-gray-900">
                                Send Us a Message
                            </h2>

                            <form className="space-y-6">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#6C4CF6]"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#6C4CF6]"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#6C4CF6]"
                                />

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#6C4CF6]"
                                />

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-[#6C4CF6] px-6 py-4 font-semibold text-white transition hover:bg-[#5938f5]"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </MainLayout>
    );
}