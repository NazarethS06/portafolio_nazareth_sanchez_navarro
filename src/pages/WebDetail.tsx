import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

function WebDetail() {

    const { t } = useLanguage()

    const images = [
        "/imagesWeb/web1.jpeg",
        "/imagesWeb/web2.jpeg",
        "/imagesWeb/web3.png",
        "/imagesWeb/web4.png",
        "/imagesWeb/web5.png",
        "/imagesWeb/web6.png",
        "/imagesWeb/web7.png"
    ]

    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [isPaused, images.length])

    const next = () => {
        setCurrent((prev) => (prev + 1) % images.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <section className="bg-surface-container py-32 px-8">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-16 text-center md:text-left">
                    <span className="text-sm uppercase tracking-widest text-on-surface-variant block mb-4">
                        {t.webDetail.tag}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
                        {t.webDetail.title}
                    </h1>

                    <p className="text-lg text-on-surface-variant max-w-2xl">
                        {t.webDetail.desc}
                    </p>
                </div>

                {/* CARRUSEL */}
                <div
                    className="relative max-w-4xl mx-auto mb-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    <img
                        src={images[current]}
                        className="rounded-xl object-cover h-[450px] w-full shadow-md transition-all duration-700"
                    />

                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow hover:bg-white"
                    >
                        ←
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow hover:bg-white"
                    >
                        →
                    </button>

                </div>

                {/* INDICADORES */}
                <div className="flex justify-center gap-2 mb-16">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition ${
                                index === current ? "bg-primary scale-125" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>

                {/* INFO */}
                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            {t.webDetail.descriptionTitle}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed">
                            {t.webDetail.descriptionText}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            {t.webDetail.techTitle}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">React</span>
                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">Tailwind</span>
                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">Laravel</span>
                            <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm">API REST</span>
                        </div>
                    </div>

                </div>

                {/* BOTONES */}
                <div className="mt-16 flex gap-6 flex-wrap">

                    <a
                        href="https://github.com/NazarethS06/webOrdenaYa"
                        target="_blank"
                        className="px-6 py-3 bg-primary text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        {t.webDetail.github}
                    </a>

                    <a
                        href="/"
                        className="px-6 py-3 border border-primary text-primary rounded-md font-bold hover:bg-primary hover:text-white transition"
                    >
                        {t.webDetail.back}
                    </a>

                </div>

            </div>
        </section>
    )
}

export default WebDetail