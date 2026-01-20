"use client";

import { useState } from "react";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

    const plans = [
        {
            name: "Startup",
            subtitle: "Perfect for small teams",
            price: billingCycle === "monthly" ? "₹999" : "₹899",
            period: billingCycle === "monthly" ? "/month" : "/month",
            description: "Everything you need to get started",
            features: [
                "Up to 10 team members",
                "Basic analytics",
                "Email support",
                "5GB storage",
                "Mobile apps",
            ],
            highlighted: false,
            badge: null,
        },
        {
            name: "Growth",
            subtitle: "For growing businesses",
            price: billingCycle === "monthly" ? "₹2999" : "₹2499",
            period: billingCycle === "monthly" ? "/month" : "/month",
            description: "Advanced features for scaling teams",
            features: [
                "Up to 50 team members",
                "Advanced analytics",
                "Priority support",
                "50GB storage",
                "Custom integrations",
                "API access",
            ],
            highlighted: true,
            badge: "Most Popular",
        },
        {
            name: "Impact",
            subtitle: "Enterprise solution",
            price: "₹50000+",
            period: "",
            description: "Custom solutions for large organizations",
            features: [
                "Unlimited team members",
                "Enterprise analytics",
                "24/7 dedicated support",
                "Unlimited storage",
                "Custom development",
                "SLA guarantee",
            ],
            highlighted: false,
            badge: null,
        },
    ];

    return (
        <section id="pricing" className="py-20 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Early Bird Registration
                    </h2>
                    <p className="text-lg text-foreground-light max-w-2xl mx-auto">
                        Get exclusive early access pricing. Limited time offer for the first
                        1000 users.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span
                            className={`text-sm font-medium ${billingCycle === "monthly"
                                ? "text-foreground"
                                : "text-foreground-light"
                                }`}
                        >
                            Monthly
                        </span>
                        <button
                            onClick={() =>
                                setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
                            }
                            className={`relative w-14 h-7 rounded-full transition-colors ${billingCycle === "annual" ? "bg-primary-gradient" : "bg-gray-200"}`}
                        >
                            <div
                                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${billingCycle === "annual" ? "translate-x-8" : "translate-x-1"
                                    }`}
                            />
                        </button>
                        <span
                            className={`text-sm font-medium ${billingCycle === "annual"
                                ? "text-foreground"
                                : "text-foreground-light"
                                }`}
                        >
                            Annual
                            <span className="ml-2 text-xs text-primary font-semibold">
                                Save 20%
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.highlighted
                                ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl scale-105 md:scale-110"
                                : "bg-white shadow-lg hover:shadow-xl"
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3
                                    className={`text-2xl font-display font-bold mb-1 ${plan.highlighted ? "text-white" : "text-foreground"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm ${plan.highlighted ? "text-white/80" : "text-foreground-light"
                                        }`}
                                >
                                    {plan.subtitle}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span
                                        className={`text-5xl font-display font-bold ${plan.highlighted ? "text-white" : "text-foreground"
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className={`text-lg ${plan.highlighted ? "text-white/80" : "text-foreground-light"
                                            }`}
                                    >
                                        {plan.period}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm mt-2 ${plan.highlighted ? "text-white/80" : "text-foreground-light"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-green-500"
                                                }`}
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
                                        <span
                                            className={`text-sm ${plan.highlighted ? "text-white" : "text-foreground-light"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded-full font-semibold transition-all ${plan.highlighted
                                    ? "bg-white text-primary hover:bg-gray-100"
                                    : "bg-primary-gradient text-white hover:opacity-90"
                                    } hover:shadow-lg hover:scale-105`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center space-y-4">
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span className="text-sm text-foreground-light">
                                No credit card required
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span className="text-sm text-foreground-light">
                                14-day free trial
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span className="text-sm text-foreground-light">
                                Cancel anytime
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
