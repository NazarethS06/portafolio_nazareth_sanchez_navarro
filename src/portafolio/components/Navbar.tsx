import { useLanguage } from "../../context/LanguageContext"

function Navbar() {

    const { t, lang, setLang } = useLanguage()

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <header className="bg-[#fcf9f8] dark:bg-stone-950 sticky top-0 z-40">
            <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">

                {/* LOGO */}
                <div className="text-2xl font-black tracking-tighter text-[#012d1d] dark:text-emerald-500 font-headline">
                    Portafolio
                </div>

                {/* LINKS */}
                <div className="hidden md:flex items-center gap-10">

                    <button
                        onClick={() => scrollTo("home")}
                        className="font-headline font-bold text-stone-500 hover:text-[#012d1d] transition"
                    >
                        {t.navbar.home}
                    </button>

                    <button
                        onClick={() => scrollTo("about")}
                        className="font-headline font-bold text-stone-500 hover:text-[#012d1d] transition"
                    >
                        {t.navbar.about}
                    </button>

                    <button
                        onClick={() => scrollTo("resume")}
                        className="font-headline font-bold text-stone-500 hover:text-[#012d1d] transition"
                    >
                        CV
                    </button>

                    <button
                        onClick={() => scrollTo("projects")}
                        className="font-headline font-bold text-stone-500 hover:text-[#012d1d] transition"
                    >
                        {t.navbar.projects}
                    </button>


                </div>

                {/* DERECHA */}
                <div className="flex items-center gap-4">

                    {/* BOTÓN IDIOMA 🔥 */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setLang("es")}
                            className={`px-2 py-1 text-xs rounded ${
                                lang === "es"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-primary"
                            }`}
                        >
                            ES
                        </button>

                        <button
                            onClick={() => setLang("en")}
                            className={`px-2 py-1 text-xs rounded ${
                                lang === "en"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-primary"
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => scrollTo("contact")}
                        className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-bold hover:opacity-80 transition-all"
                    >
                        {t.navbar.hire}
                    </button>

                </div>

            </nav>
        </header>
    );
}

export default Navbar;