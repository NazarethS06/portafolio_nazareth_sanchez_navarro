import { useLanguage } from "../../context/LanguageContext"

const Contact = () => {

    const { t } = useLanguage()

    return (
        <div id="contact" className="bg-surface-container py-32 px-8">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="font-headline text-4xl font-extrabold text-primary mb-6">
                    {t.contact.title}
                </h2>

                <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto">
                    {t.contact.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-6">

                    <a
                        href="mailto:nazaretsnjaz1406@gmail.com"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition"
                    >
                        <span className="material-symbols-outlined">mail</span>
                        {t.contact.email}
                    </a>

                    <a
                        href="https://linkedin.com/in/nazareth-sanchez-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-primary hover:text-white transition"
                    >
                        <span className="material-symbols-outlined">business_center</span>
                        {t.contact.linkedin}
                    </a>

                    <a
                        href="https://wa.me/50686171318"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition"
                    >
                        <span className="material-symbols-outlined">chat</span>
                        {t.contact.whatsapp}
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Contact