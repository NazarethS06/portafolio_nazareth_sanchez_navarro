

function Footer() {
    return (
        <footer className="bg-[#f6f3f2] dark:bg-stone-900 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-bold text-[#012d1d] font-headline uppercase tracking-widest">THE ARCHIVE</div>
<p className="font-['Public_Sans'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">© 2024 The Curated Archive. All rights reserved.</p>
<div className="flex gap-8">
<a className="font-['Public_Sans'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors" href="#">LinkedIn</a>
<a className="font-['Public_Sans'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors" href="#">GitHub</a>
<a className="font-['Public_Sans'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-emerald-400 transition-colors" href="#">Read.cv</a>
</div>
</footer>
    );
}   
export default Footer;
