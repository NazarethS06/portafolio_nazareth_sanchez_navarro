import nazaPhoto from "../../assets/naza-photo.jpg"
import { useLanguage } from "../../context/LanguageContext"

function HeroSection() {

    const { lang, setLang, t } = useLanguage()

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section
            id="home"
            className="relative min-h-[819px] flex items-center px-8 py-24 max-w-7xl mx-auto overflow-hidden"
        >

            <div className="grid grid-cols-12 gap-8 w-full items-center">

                {/* TEXTO */}
                <div className="col-span-12 md:col-span-8">

                    <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-primary mb-8">
                        {t.hero.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-on-surface-variant mb-12">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-wrap gap-6">

                        <button
                            onClick={() => scrollTo("projects")}
                            className="bg-primary text-white px-10 py-4 rounded-md font-bold flex items-center gap-3"
                        >
                            {t.hero.btn1}
                        </button>

                        <button
                            onClick={() => scrollTo("resume")}
                            className="border border-outline-variant/15 text-primary px-10 py-4 rounded-md font-bold"
                        >
                            {t.hero.btn2}
                        </button>

                    </div>
                </div>

                {/* IMAGEN */}
                <div className="hidden md:block col-span-4 relative h-[600px]">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={nazaPhoto}
                        />
                    </div>

                    <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-xl">
                        <p className="font-bold text-primary">
                            {t.hero.focus}
                        </p>

                        <p className="text-sm italic">
                            "{t.hero.phrase}"
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection