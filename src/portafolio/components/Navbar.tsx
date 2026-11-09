import { useState } from "react"

import { useLanguage } from "../../context/LanguageContext"

function Navbar() {

    const { t, lang, setLang } = useLanguage()
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        })
        setMenuOpen(false)
    }

    return (
        <header className="bg-[#fcf9f8] dark:bg-stone-950 sticky top-0 z-40">
            <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">

                {/* LOGO */}
                <div className="text-2xl font-black tracking-tighter text-[#012d1d] dark:text-emerald-500 font-headline">
                    Nazareth Sánchez
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
                        className="hidden sm:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-bold hover:opacity-80 transition-all"
                    >
                        {t.navbar.hire}
                    </button>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-outline-variant text-primary"
                        onClick={() => setMenuOpen((value) => !value)}
                        aria-expanded={menuOpen}
                        aria-label={t.navbar.menu}
                    >
                        <span className="material-symbols-outlined">
                            {menuOpen ? "close" : "menu"}
                        </span>
                    </button>

                </div>

            </nav>

            {menuOpen && (
                <div className="md:hidden border-t border-outline-variant/20 bg-[#fcf9f8] px-8 pb-6">
                    <div className="flex flex-col gap-4 pt-4">
                        <button onClick={() => scrollTo("home")} className="text-left font-headline font-bold text-stone-600">
                            {t.navbar.home}
                        </button>
                        <button onClick={() => scrollTo("about")} className="text-left font-headline font-bold text-stone-600">
                            {t.navbar.about}
                        </button>
                        <button onClick={() => scrollTo("resume")} className="text-left font-headline font-bold text-stone-600">
                            CV
                        </button>
                        <button onClick={() => scrollTo("projects")} className="text-left font-headline font-bold text-stone-600">
                            {t.navbar.projects}
                        </button>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="inline-flex w-full justify-center bg-primary text-on-primary px-6 py-3 rounded-md font-headline font-bold hover:opacity-80 transition-all"
                        >
                            {t.navbar.hire}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;