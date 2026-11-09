import { useLanguage } from "../../context/LanguageContext"
import Reveal from "./Reveal"

const techs = {
    backend: [".NET", "Laravel", "FastAPI"],
    frontend: ["React", "Vue", "Tailwind"],
    db: ["MySQL", "SQL Server", "MongoDB", "Firebase"],
}

function Skill() {

    const { t } = useLanguage()

    const cards = [
        {
            key: "backend" as const,
            icon: "dns",
            title: t.skills.backend,
            desc: t.skills.backendDesc,
            offset: "",
        },
        {
            key: "frontend" as const,
            icon: "web",
            title: t.skills.frontend,
            desc: t.skills.frontendDesc,
            offset: "md:translate-y-8",
        },
        {
            key: "db" as const,
            icon: "storage",
            title: t.skills.db,
            desc: t.skills.dbDesc,
            offset: "",
        },
    ]

    return (
        <section
            id="about"
            className="bg-surface-container-low py-32 px-8 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto">

                <Reveal className="mb-20">
                    <span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant block mb-4">
                        {t.skills.title}
                    </span>

                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                        {t.skills.subtitle}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {cards.map((card, index) => (
                        <Reveal key={card.key} delay={index * 120} className="h-full">
                            <div
                                className={`bg-surface-container-lowest p-10 rounded-xl h-full shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-primary-fixed transition-all duration-500 group ${card.offset}`}
                            >
                                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary">{card.icon}</span>
                                </div>

                                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                                    {card.title}
                                </h3>

                                <p className="text-on-surface-variant leading-relaxed mb-6 group-hover:text-on-primary-fixed-variant">
                                    {card.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {techs[card.key].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-surface-container-high group-hover:bg-on-primary rounded-full text-sm text-primary transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skill
