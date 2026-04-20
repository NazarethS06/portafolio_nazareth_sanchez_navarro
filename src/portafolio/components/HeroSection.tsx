
function HeroSection() {
    return (
       <section className="relative min-height-[819px] flex items-center px-8 py-24 max-w-7xl mx-auto overflow-hidden">
<div className="grid grid-cols-12 gap-8 w-full items-center">
<div className="col-span-12 md:col-span-8">
<h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-primary leading-[0.9] mb-8">
                        Curating Digital Excellence.
                    </h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                        A Senior Multi-disciplinary Lead focusing on the intersection of architectural UI design and strategic brand storytelling.
                    </p>
<div className="flex flex-wrap gap-6">
<button className="bg-primary text-on-primary px-10 py-4 rounded-md font-headline font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3 shadow-sm bg-gradient-to-br from-primary to-primary-container">
                            View Work
                            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="border border-outline-variant/15 text-primary px-10 py-4 rounded-md font-headline font-bold text-lg hover:bg-surface-container-low transition-all">
                            Download CV
                        </button>
</div>
</div>
<div className="hidden md:block col-span-4 relative h-[600px]">
<div className="absolute inset-0 bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
<img alt="Professional portrait" className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-90" data-alt="Minimalist high-contrast black and white portrait of a professional man in a dark suit against a soft grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPLiSD4Set6oasaoVuMRsjzr_2Jl5-YhXWQxB6HHf7z6U0UbrIEFVPsHa_iH-xfziDfC6at97ilUz5BLGLQ5ONzh5n1Q11KVZr94gEcWKxqf8gUzc4-r8BfE8FoTO6DPZF625Y4bV3cmH985fSYFA-XARb2ch2JAHUvd4y92x2yCBK352J6EOsaBEQLFEoWfw--vv41SPY53oXbCna5J1wNzTVC6IlCaHJoOQT1tN_T8RRBI7R3shSpuXdSVKivTrBTcpV0UBZAA"/>
</div>
<div className="absolute -bottom-6 -left-6 p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-xl max-w-[240px]">
<p className="font-headline font-bold text-primary text-sm uppercase tracking-widest mb-2">Philosophy</p>
<p className="text-on-surface-variant text-sm italic">"Simplicity is the ultimate sophistication."</p>
</div>
</div>
</div>
</section>
    );
}   

export default HeroSection;
