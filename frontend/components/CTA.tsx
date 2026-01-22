"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission
        console.log("Email submitted:", email);
        setEmail("");
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-background-light to-purple-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary-gradient rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-display font-bold">
                                Join the Revolution.
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                                Be part of the future of work. Get early access and exclusive
                                updates.
                            </p>
                        </div>

                        {/* Email Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-foreground-light"
                            />
                            <button
                                type="submit"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105 whitespace-nowrap"
                            >
                                Get Started
                            </button>
                        </form>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Free forever plan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
