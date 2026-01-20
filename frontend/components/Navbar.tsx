"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <AnimatedLogo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="#features"
                                className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Features
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#about"
                                className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="#contact"
                                className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button className="bg-primary-gradient hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="#features"
                                    className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="#about"
                                    className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="#contact"
                                    className="text-foreground-light hover:text-foreground transition-colors text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                                <button className="bg-primary-gradient hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all w-full">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
