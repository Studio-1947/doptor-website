export default function Features() {
    const features = [
        {
            title: "Doptor Office",
            subtitle: "Workspace Management",
            description:
                "Manage your office space, book meeting rooms, and coordinate with your team seamlessly.",
            icon: "🏢",
            color: "from-blue-500 to-blue-600",
            features: [
                "Space Booking",
                "Team Coordination",
                "Resource Management",
                "Analytics Dashboard",
            ],
        },
        {
            title: "Doptor Campus",
            subtitle: "Educational Excellence",
            description:
                "Transform your campus experience with integrated tools for students, faculty, and administration.",
            icon: "🎓",
            color: "from-pink-500 to-pink-600",
            features: [
                "Course Management",
                "Student Portal",
                "Faculty Tools",
                "Campus Events",
            ],
        },
        {
            title: "Doptor Volunteer",
            subtitle: "Community Impact",
            description:
                "Connect volunteers with opportunities and manage community initiatives effectively.",
            icon: "🤝",
            color: "from-green-500 to-green-600",
            features: [
                "Volunteer Matching",
                "Event Organization",
                "Impact Tracking",
                "Community Building",
            ],
        },
    ];

    return (
        <section id="features" className="py-20 px-4 bg-background-light">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Three Verticals. One Ecosystem.
                    </h2>
                    <p className="text-lg text-foreground-light max-w-2xl mx-auto">
                        Everything you need to organize work, education, and community in
                        one powerful platform.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
                            >
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-primary font-semibold">
                                        {feature.subtitle}
                                    </p>
                                </div>

                                <p className="text-foreground-light leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-2 pt-4">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <svg
                                                className="w-5 h-5 text-green-500 flex-shrink-0"
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
                                            <span className="text-foreground-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link */}
                                <button className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn more
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
