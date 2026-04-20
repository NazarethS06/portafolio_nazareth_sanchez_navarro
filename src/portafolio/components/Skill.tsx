

function Skill() {
    return (
       <section className="bg-surface-container-low py-32 px-8">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant block mb-4">Core Competencies</span>
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Technical Mastery &amp; Design Logic</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group">
<div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
<span className="material-symbols-outlined text-primary" data-icon="architecture">architecture</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">UI Architecture</h3>
<p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">Building scalable design systems with atomic principles and rigorous grid logic for complex applications.</p>
</div>

<div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group md:translate-y-8">
<div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
<span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Brand Strategy</h3>
<p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">Crafting cohesive visual identities that translate core values into high-impact digital experiences and trust.</p>
</div>


<div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-primary-fixed transition-colors duration-500 group">
<div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-on-primary">
<span className="material-symbols-outlined text-primary" data-icon="code">code</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-4">Modern Frontend</h3>
<p className="text-on-surface-variant leading-relaxed group-hover:text-on-primary-fixed-variant">Execution through performant, accessible code using React, Tailwind, and cutting-edge web technologies.</p>
</div>
</div>
</div>
</section>
    );
}
export default Skill;