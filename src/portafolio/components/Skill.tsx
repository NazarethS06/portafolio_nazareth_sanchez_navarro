import { useLanguage } from "../../context/LanguageContext"

function Skill() {

    const { t } = useLanguage()

    return (
        <section
            id="about"
            className="bg-surface-container-low py-32 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <div className="mb-20">
                    <span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant block mb-4">
                        {t.skills.title}
                    </span>

                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                        {t.skills.subtitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group">
                        <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
                            <span className="material-symbols-outlined text-primary">dns</span>
                        </div>

                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                            {t.skills.backend}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">
                            {t.skills.backendDesc}
                        </p>
                    </div>

                    <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group md:translate-y-8">
                        <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
                            <span className="material-symbols-outlined text-primary">web</span>
                        </div>

                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                            {t.skills.frontend}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">
                            {t.skills.frontendDesc}
                        </p>
                    </div>

                    <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group">
                        <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
                            <span className="material-symbols-outlined text-primary">storage</span>
                        </div>

                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                            {t.skills.db}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">
                            {t.skills.dbDesc}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skill