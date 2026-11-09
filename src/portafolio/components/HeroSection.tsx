import nazaPhoto from "../../assets/naza-photo.jpg"
import { useLanguage } from "../../context/LanguageContext"

function HeroSection() {

    const { t } = useLanguage()

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

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary-fixed/60 blur-3xl"
            />

            <div className="relative grid grid-cols-12 gap-8 w-full items-center">

                {/* TEXTO */}
                <div className="col-span-12 md:col-span-8">

                    <span className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-primary-fixed text-sm font-bold text-on-primary-fixed-variant">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600"></span>
                        </span>
                        {t.hero.available}
                    </span>

                    <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-8">
                        {t.hero.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-on-surface-variant mb-12">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-wrap gap-6">

                        <button
                            onClick={() => scrollTo("projects")}
                            className="bg-primary text-white px-10 py-4 rounded-md font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:opacity-90 hover:-translate-y-0.5 transition"
                        >
                            {t.hero.btn1}
                        </button>

                        <button
                            onClick={() => scrollTo("resume")}
                            className="border border-primary text-primary px-10 py-4 rounded-md font-bold hover:bg-primary hover:text-white hover:-translate-y-0.5 transition"
                        >
                            {t.hero.btn2}
                        </button>

                    </div>
                </div>

                {/* IMAGEN */}
                <div className="hidden md:block col-span-4 relative h-[600px]">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover shadow-2xl"
                            src={nazaPhoto}
                            alt="Nazareth Sánchez"
                            fetchPriority="high"
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