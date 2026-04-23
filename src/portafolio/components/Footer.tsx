import { useLanguage } from "../../context/LanguageContext"

function Footer() {

    const { t } = useLanguage()

    return (
        <footer className="bg-[#f6f3f2] dark:bg-stone-900 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-lg font-bold text-[#012d1d] dark:text-emerald-500 font-headline uppercase tracking-widest">
                Nazareth Sánchez
            </div>

            <p className="text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">
                © {new Date().getFullYear()} Nazareth Sánchez. {t.footer.rights}
            </p>

            <div className="flex gap-8">

                <a
                    href="https://linkedin.com/in/nazareth-sanchez-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors"
                >
                    {t.contact.linkedin}
                </a>

                <a
                    href="https://github.com/NazarethS06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors"
                >
                    GitHub
                </a>

                <a
                    href="mailto:nazaretsnjaz1406@gmail.com"
                    className="text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors"
                >
                    {t.contact.email}
                </a>

            </div>
        </footer>
    )
}

export default Footer