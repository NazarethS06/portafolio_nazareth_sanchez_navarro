
function Navbar() {
    return (
        <header className="bg-[#fcf9f8] dark:bg-stone-950 sticky top-0 z-40">
            <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
                <div className="text-2xl font-black tracking-tighter text-[#012d1d] dark:text-emerald-500 font-headline">THE ARCHIVE</div>
                <div className="hidden md:flex items-center gap-10">
                    <a className="font-headline font-bold tracking-tight text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-stone-200 hover:opacity-80 transition-opacity duration-300" href="#">Portfolio</a>
                    <a className="font-headline font-bold tracking-tight text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-stone-200 hover:opacity-80 transition-opacity duration-300" href="#">About</a>
                    <a className="font-headline font-bold tracking-tight text-stone-500 dark:text-stone-400 hover:text-[#012d1d] dark:hover:text-stone-200 hover:opacity-80 transition-opacity duration-300" href="#">Contact</a>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-bold tracking-tight hover:opacity-80 transition-all active:translate-y-px">
                    Hire Me
                </button>
            </nav>
        </header>

    );
}   
export default Navbar;
