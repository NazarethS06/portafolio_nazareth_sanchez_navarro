import { useLanguage } from "../../context/LanguageContext"

function Resume() {

    const { t } = useLanguage()

    return (
        <section
            id="resume"
            className="bg-surface-container py-32 px-8"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">

                <div className="md:col-span-4">

                    <h2 className="font-headline text-4xl font-extrabold text-primary mb-6">
                        {t.resume.title}
                    </h2>

                    <p className="text-on-surface-variant mb-10">
                        {t.resume.desc}
                    </p>

                    <a
                        href="/CV_Nazareth_Sanchez_Navarro_ES.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-md font-bold hover:opacity-90"
                    >
                        <span className="material-symbols-outlined">description</span>
                        {t.resume.download}
                    </a>

                </div>

                <div className="md:col-span-8 space-y-12">

                    <div className="relative pl-10 border-l-2 border-primary-fixed-dim">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                        <span className="text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                            2022 — {t.resume.present}
                        </span>

                        <h4 className="text-xl font-bold text-primary">
                            {t.resume.edu1Title}
                        </h4>

                        <p className="text-on-surface-variant mt-2">
                            {t.resume.edu1}
                        </p>
                    </div>

                    <div className="relative pl-10 border-l-2 border-primary-fixed-dim">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-fixed-dim"></div>

                        <span className="text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                            2015 — 2020
                        </span>

                        <h4 className="text-xl font-bold text-primary">
                            {t.resume.edu2Title}
                        </h4>

                        <p className="text-on-surface-variant mt-2">
                            {t.resume.edu2}
                        </p>
                    </div>

                    <div className="relative pl-10 border-l-2 border-primary-fixed-dim">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-fixed-dim"></div>

                        <span className="text-xs uppercase tracking-widest text-on-surface-variant block mb-2">
                            {t.resume.certLabel}
                        </span>

                        <h4 className="text-xl font-bold text-primary">
                            CertiProf & Cisco
                        </h4>

                        <p className="text-on-surface-variant mt-2">
                            {t.resume.cert}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Resume