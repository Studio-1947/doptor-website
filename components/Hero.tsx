export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-purple-50 -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-tight text-[#A596B4]">
                            the super app for{" "}
                            <span className="font-bold bg-[linear-gradient(116.26deg,#6366F1_0%,#F43F5E_100%)] bg-clip-text text-transparent">
                                organising work.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground-light max-w-xl">
                            A new way to manage your work, collaborate with your team, and get
                            things done. All in one place.
                        </p>
                    </div>

                    {/* Social Proof (Stacked Images) */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                                    <img
                                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                        alt={`User ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-foreground-light">
                            <span className="font-bold text-primary text-lg">500+</span> joined today
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary-gradient hover:opacity-90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                            Try it for free
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
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                        <button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2">
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
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

                        {/* Phone mockup placeholder */}
                        <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                {/* Status bar */}
                                <div className="h-8 bg-background-light flex items-center justify-between px-6 text-xs">
                                    <span>9:41</span>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-4 bg-foreground-light rounded-sm" />
                                        <div className="w-4 h-4 bg-foreground-light rounded-sm" />
                                        <div className="w-4 h-4 bg-foreground-light rounded-sm" />
                                    </div>
                                </div>

                                {/* App content preview */}
                                <div className="p-4 space-y-4">
                                    <div className="h-12 bg-primary/20 rounded-xl animate-pulse" />
                                    <div className="h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-24 bg-accent-blue/20 rounded-xl" />
                                        <div className="h-24 bg-accent-pink/20 rounded-xl" />
                                    </div>
                                    <div className="h-40 bg-background-light rounded-2xl" />
                                </div>
                            </div>

                            {/* Home indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
