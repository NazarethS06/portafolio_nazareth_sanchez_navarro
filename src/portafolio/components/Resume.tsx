

function Resume() {
    return (
       
<section className="bg-surface-container py-32 px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="font-headline text-4xl font-extrabold text-primary mb-6">Curriculum Vitae</h2>
<p className="text-on-surface-variant mb-10">A brief history of professional contributions and academic foundations.</p>
<a className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:opacity-90" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
                        Full Resume (PDF)
                    </a>
</div>
<div className="md:col-span-8 space-y-12">
<div className="relative pl-10 border-l-2 border-primary-fixed-dim">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
<span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">2021 — Present</span>
<h4 className="font-headline text-xl font-bold text-primary">Senior Design Lead @ Studio Minimal</h4>
<p className="text-on-surface-variant mt-2">Spearheading digital transformation for Fortune 500 clients, managing a team of 12 designers across three time zones.</p>
</div>
<div className="relative pl-10 border-l-2 border-primary-fixed-dim">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-fixed-dim"></div>
<span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">2018 — 2021</span>
<h4 className="font-headline text-xl font-bold text-primary">UX Architect @ Global Systems</h4>
<p className="text-on-surface-variant mt-2">Developed core design system components used by millions of daily active users. Focused on accessibility and performance.</p>
</div>
<div className="relative pl-10 border-l-2 border-primary-fixed-dim">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-fixed-dim"></div>
<span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">2016 — 2018</span>
<h4 className="font-headline text-xl font-bold text-primary">Junior Interaction Designer @ Creative Flow</h4>
<p className="text-on-surface-variant mt-2">Crafting interactive prototypes and high-fidelity mockups for early-stage tech startups in the Bay Area.</p>
</div>
</div>
</div>
</section>
    );
}
export default Resume;
