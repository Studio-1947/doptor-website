export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40 pb-16 overflow-hidden">
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

                        {/* iPhone Mockup */}
                        <div className="relative w-[300px] h-[600px] bg-white rounded-[3.5rem] p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[6px] border-white ring-1 ring-black/5">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-40 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                                {/* Speaker/Camera area */}
                                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                                    <div className="w-10 h-1 rounded-full bg-[#1a1a1a]" />
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative border border-gray-100">
                                {/* Status bar */}
                                <div className="h-12 bg-white flex items-center justify-between px-6 pt-2 text-xs font-medium text-gray-900">
                                    <span>9:41</span>
                                    <div className="flex gap-1.5">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.73 0 1.33-.6 1.33-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
                                    </div>
                                </div>

                                {/* App content preview */}
                                <div className="p-4 space-y-4">
                                    <div className="h-12 bg-gray-50 rounded-xl animate-pulse" />
                                    <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-24 bg-gray-50 rounded-xl" />
                                        <div className="h-24 bg-gray-50 rounded-xl" />
                                    </div>
                                    <div className="h-40 bg-gray-50 rounded-2xl" />
                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full" />
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute top-24 -left-[7px] w-[2px] h-8 bg-gray-200 rounded-l-md" /> {/* Mute switch */}
                            <div className="absolute top-36 -left-[7px] w-[2px] h-12 bg-gray-200 rounded-l-md" /> {/* Volume Up */}
                            <div className="absolute top-52 -left-[7px] w-[2px] h-12 bg-gray-200 rounded-l-md" /> {/* Volume Down */}
                            <div className="absolute top-40 -right-[7px] w-[2px] h-16 bg-gray-200 rounded-r-md" /> {/* Power */}

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col gap-3 w-48 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-900 text-sm">Real-time Impact</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-green-500 rounded-full" />
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-medium">75% TARGET ACHIEVED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
