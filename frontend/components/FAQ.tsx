"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "./TextReveal";

const faqs = [
    {
        question: "Is Doptor free to use?",
        answer: "Yes, Doptor offers a 'Free forever' plan that includes all essential features for small teams and individuals. We also have paid plans for larger organizations with advanced needs.",
    },
    {
        question: "Can I use Doptor for my university campus?",
        answer: "Absolutely! Doptor Campus is specifically designed for educational institutions, offering tools for course management, student portals, and faculty coordination.",
    },
    {
        question: "How secure is my data?",
        answer: "We take security seriously. Doptor uses enterprise-grade encryption for all data in transit and at rest. We are GDPR compliant and regularly undergo security audits.",
    },
    {
        question: "Do you offer discounts for non-profits?",
        answer: "Yes, we love supporting non-profits! Doptor Volunteer is free for registered non-profit organizations, and we offer significant discounts on our other products.",
    },
    {
        question: "Can I integrate Doptor with other tools?",
        answer: "Doptor integrates seamlessly with popular tools like Slack, Google Workspace, Microsoft Teams, and more. Our API allows for custom integrations as well.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <TextReveal
                        text="Frequently Asked Questions"
                        className="text-4xl md:text-5xl font-display font-bold"
                    />
                    <p className="text-lg text-foreground-light">
                        Everything you need to know about Doptor.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-foreground">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-foreground-light leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
