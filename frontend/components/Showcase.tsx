export default function Showcase() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-background-dark to-background-darker text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                                Designed for the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Next Generation.
                                </span>
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Built with modern technology and designed for the future of
                                work. Experience seamless collaboration and productivity like
                                never before.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-1">
                                        Lightning Fast Performance
                                    </h3>
                                    <p className="text-gray-400">
                                        Optimized for speed and efficiency, ensuring smooth
                                        experience across all devices.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-secondary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-1">
                                        Enterprise-Grade Security
                                    </h3>
                                    <p className="text-gray-400">
                                        Your data is protected with industry-leading security
                                        standards and encryption.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-1">
                                        Seamless Collaboration
                                    </h3>
                                    <p className="text-gray-400">
                                        Work together in real-time with your team, no matter where
                                        they are.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - App Mockups */}
                    <div className="relative">
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />

                        <div className="relative grid grid-cols-2 gap-4">
                            {/* Desktop mockup */}
                            <div className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl">
                                <div className="bg-white rounded-lg h-48 overflow-hidden">
                                    <div className="h-8 bg-background-light flex items-center gap-2 px-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 bg-primary/30 rounded w-3/4" />
                                        <div className="h-3 bg-gray-200 rounded w-full" />
                                        <div className="h-3 bg-gray-200 rounded w-5/6" />
                                        <div className="grid grid-cols-3 gap-2 mt-4">
                                            <div className="h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded" />
                                            <div className="h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded" />
                                            <div className="h-16 bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile mockups */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 shadow-xl">
                                <div className="bg-white rounded-lg h-40 p-3 space-y-2">
                                    <div className="h-3 bg-primary/30 rounded w-2/3" />
                                    <div className="h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                                    <div className="grid grid-cols-2 gap-1.5">
                                        <div className="h-8 bg-accent-blue/20 rounded" />
                                        <div className="h-8 bg-accent-pink/20 rounded" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 shadow-xl">
                                <div className="bg-white rounded-lg h-40 p-3 space-y-2">
                                    <div className="h-3 bg-secondary/30 rounded w-2/3" />
                                    <div className="h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg" />
                                    <div className="grid grid-cols-2 gap-1.5">
                                        <div className="h-8 bg-accent-green/20 rounded" />
                                        <div className="h-8 bg-accent-pink/20 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
