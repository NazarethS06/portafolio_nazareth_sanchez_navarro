import { useLanguage } from "../../context/LanguageContext"
import { Link } from "react-router-dom"

function Project() {

    const { t } = useLanguage()

    return (
        <section
            id="projects"
            className="py-32 px-8 max-w-7xl mx-auto scroll-mt-32"
        >
            <div className="mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
                    {t.projects.title}
                </h2>
            </div>

            <div className="space-y-32">

                {/* ZYBUS */}
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 md:col-span-7">
                        <img
                            className="w-full h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition"
                            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-5">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            {t.projects.zybus}
                        </h3>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/NazarethS06/Zybus-Backend"
                                target="_blank"
                                className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
                            >
                                {t.projects.github}
                            </a>
                        </div>
                    </div>
                </div>

                {/* APP MOVIL */}
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            {t.projects.app}
                        </h3>

                        <Link
                            to="/app"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
                        >
                            {t.projects.view}
                        </Link>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/NazarethS06/appOrdenaYa"
                                target="_blank"
                                className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
                            >
                                {t.projects.github}
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 order-1 md:order-2">
                        <img
                            className="w-full h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition"
                            src="app3.png"
                        />
                    </div>
                </div>

                {/* WEB */}
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 md:col-span-7">
                        <img
                            className="w-full h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition"
                            src="imagesWeb/web1.jpeg"
                        />
                    </div>

                    <div className="col-span-12 md:col-span-5">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            {t.projects.web}
                        </h3>


                        <Link
                            to="/web"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
                        >
                            {t.projects.view}
                        </Link>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/NazarethS06/webOrdenaYa"
                                target="_blank"
                                className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
                            >
                                {t.projects.github}
                            </a>
                        </div>
                    </div>
                </div>

                {/* SUPER */}
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            {t.projects.super}
                        </h3>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/NazarethS06/superBackend"
                                target="_blank"
                                className="px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
                            >
                                {t.projects.github}
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 order-1 md:order-2">
                        <img
                            className="w-full h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition"
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project