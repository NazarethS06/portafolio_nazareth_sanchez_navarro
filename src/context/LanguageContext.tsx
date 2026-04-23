import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "../i18n/translations"


type Language = "es" | "en"

interface LanguageContextType {
    lang: Language
    setLang: (lang: Language) => void
    t: (typeof translations)["es"] 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

    const getBrowserLang = (): Language => {
        const lang = navigator.language

        if (lang.startsWith("es")) return "es"
        return "en"
    }

    const [lang, setLang] = useState<Language>(
        (localStorage.getItem("lang") as Language) || getBrowserLang()
    )

    const t = translations[lang]

    useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error("useLanguage debe usarse dentro de LanguageProvider")
    }

    return context
}