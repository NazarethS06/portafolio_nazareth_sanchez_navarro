import { useLanguage } from "../../context/LanguageContext"
import { Link } from "react-router-dom"

interface ProjectItem {
    key: "bercorp" | "zybus" | "app" | "web" | "super"
    image?: string
    github?: string
    detail?: string
    tags?: string[]
}

const items: ProjectItem[] = [
    {
        key: "bercorp",
        tags: ["Laravel", "PHP", "MySQL", "React", "Tailwind"],
    },
    {
        key: "zybus",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        github: "https://github.com/FallasDev/Zybus-Backend",
    },
    {
        key: "app",
        image: "app3.png",
        github: "https://github.com/NazarethS06/appOrdenaYa",
        detail: "/app",
    },
    {
        key: "web",
        image: "imagesWeb/web1.jpeg",
        github: "https://github.com/NazarethS06/webOrdenaYa",
        detail: "/web",
    },
    {
        key: "super",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        github: "https://github.com/NazarethS06/superBackend",
    },
]

function Project() {

    const { t } = useLanguage()

    const names = {
        bercorp: t.projects.bercorp,
        zybus: t.projects.zybus,
        app: t.projects.app,
        web: t.projects.web,
        super: t.projects.super,
    }

    const descriptions = {
        bercorp: t.projects.bercorpDesc,
        zybus: t.projects.zybusDesc,
        app: t.projects.appDesc,
        web: t.projects.webDesc,
        super: t.projects.superDesc,
    }

    return (
        <section
            id="projects"
            className="py-32 px-8 max-w-7xl mx-auto scroll-mt-32"
        >
            <div className="mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
                    {t.projects.title}
                </h2>
            </div>

            <div className="space-y-32">

                {items.map((item, index) => {
                    const reversed = index % 2 === 1

                    return (
                        <div key={item.key} className="grid grid-cols-12 gap-8 items-center">

                            <div
                                className={`col-span-12 md:col-span-7 ${
                                    reversed ? "order-1 md:order-2" : ""
                                }`}
                            >
                                {item.image ? (
                                    <img
                                        className="w-full h-[320px] md:h-[500px] object-cover rounded-xl md:grayscale hover:grayscale-0 transition"
                                        src={item.image}
                                        alt={`${t.projects.imgAlt}: ${names[item.key]}`}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-[320px] md:h-[500px] rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center"
                                        role="img"
                                        aria-label={names[item.key]}
                                    >
                                        <span className="font-headline text-5xl md:text-7xl font-extrabold tracking-widest text-on-primary-container">
                                            {names[item.key]}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div
                                className={`col-span-12 md:col-span-5 ${
                                    reversed ? "order-2 md:order-1" : ""
                                }`}
                            >
                                <h3 className="text-3xl font-bold text-primary mb-4">
                                    {names[item.key]}
                                </h3>

                                <p className="text-on-surface-variant mb-6 leading-relaxed">
                                    {descriptions[item.key]}
                                </p>

                                {item.tags && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-surface-container-high rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap items-center gap-4">

                                    {item.detail && (
                                        <Link
                                            to={item.detail}
                                            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
                                        >
                                            {t.projects.view}
                                        </Link>
                                    )}

                                    {item.github ? (
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
                                        >
                                            {t.projects.github}
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
                                            <span className="material-symbols-outlined text-base">lock</span>
                                            {t.projects.privateRepo}
                                        </span>
                                    )}

                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Project
