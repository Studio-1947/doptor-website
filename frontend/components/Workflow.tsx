"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Connect",
        description: "Link your existing tools and databases in seconds. Doptor integrates with everything you use.",
        color: "bg-blue-500",
        lightColor: "bg-blue-100",
    },
    {
        number: "02",
        title: "Organize",
        description: "Create custom workspaces for different teams or projects. Keep everything structured and accessible.",
        color: "bg-purple-500",
        lightColor: "bg-purple-100",
    },
    {
        number: "03",
        title: "Collaborate",
        description: "Invite your team and start working together in real-time. Share updates, tasks, and resources.",
        color: "bg-pink-500",
        lightColor: "bg-pink-100",
    },
];

export default function Workflow() {
    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold"
                    >
                        How Doptor Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground-light max-w-2xl mx-auto"
                    >
                        Get started in three simple steps. No complex setup required.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                                    <span className={`text-2xl font-bold ${step.color.replace("bg-", "text-")}`}>
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-display font-bold mb-3 text-center md:text-left">
                                    {step.title}
                                </h3>
                                <p className="text-foreground-light leading-relaxed text-center md:text-left">
                                    {step.description}
                                </p>

                                {/* Connecting Line Animation (Mobile) */}
                                {index !== steps.length - 1 && (
                                    <div className="md:hidden absolute bottom-[-24px] left-1/2 w-0.5 h-12 bg-gray-100 -translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
