import { useLanguage } from "../context/LanguageContext"

function AppDetail() {

    const { t } = useLanguage()

    return (
        <section className="bg-surface-container py-32 px-8">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-sm uppercase tracking-widest text-on-surface-variant block mb-4">
                        {t.appDetail.tag}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
                        {t.appDetail.title}
                    </h1>

                    <p className="text-lg text-on-surface-variant max-w-2xl">
                        {t.appDetail.desc}
                    </p>
                </div>

                {/* IMÁGENES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <img src="/app1.png" className="rounded-xl object-cover aspect-[9/20] w-full" />
                    <img src="/app2.jpeg" className="rounded-xl object-cover aspect-[9/20] w-full" />
                    <img src="/app3.png" className="rounded-xl object-cover aspect-[9/20] w-full" />
                </div>

                {/* INFO */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* DESCRIPCIÓN */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            {t.appDetail.descriptionTitle}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed">
                            {t.appDetail.descriptionText}
                        </p>
                    </div>

                    {/* TECNOLOGÍAS */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            {t.appDetail.techTitle}
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">
                                React Native
                            </span>

                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">
                                Firebase
                            </span>

                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">
                                API REST
                            </span>

                        </div>
                    </div>

                </div>

                {/* BOTONES */}
                <div className="mt-16 flex gap-6 flex-wrap">

                    <a
                        href="https://github.com/NazarethS06/appOrdenaYa"
                        target="_blank"
                        className="px-6 py-3 bg-primary text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        {t.appDetail.github}
                    </a>

                    <a
                        href="/"
                        className="px-6 py-3 border border-primary text-primary rounded-md font-bold hover:bg-primary hover:text-white transition"
                    >
                        {t.appDetail.back}
                    </a>

                </div>

            </div>
        </section>
    )
}

export default AppDetail