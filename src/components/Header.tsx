import { useEffect, useState } from "react";
import { DropdowMenu } from "./DropdownMenu";
import { MusicButton } from "./MusicButton";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header 
                className={`
                fixed top-0 left-0 w-full flex justify-between items-center gap-6 px-10 z-100 transition-all duration-300
                ${isScrolled ? "py-6 bg-ivory/90 backdrop-blur-md shadow-lg" : "py-8 bg-transparent"}
                `}
            >
                <div>
                    <a className={`font-title text-ivory text-3xl ${isScrolled ? "text-petroleum" : "text-ivory" }`} href="/">M & T</a>
                </div>
                <div>
                    <nav className="hidden lg:block">
                        <ul className={`flex items-center gap-x-6 font-small-caps font-semibold text-ivory ${isScrolled ? "text-petroleum" : "text-ivory" }`}>
                            <li><a href="#inicio" className="lg:hover:underline hover:text-underline-offset-6 transition">INICIO</a></li>
                            <li><a href="#cuenta-regresiva" className="lg:hover:underline hover:text-underline-offset-6 transition">CUENTA REGRESIVA</a></li>
                            <li><a href="#lugar" className="lg:hover:underline hover:text-underline-offset-6 transition">DONDE</a></li>
                            <li><a href="#dress-code" className="lg:hover:underline hover:text-underline-offset-6 transition">DRESS CODE</a></li>
                            <li><a href="#regalos" className="lg:hover:underline hover:text-underline-offset-6 transition">REGALOS</a></li>
                            <li><a href="#playlist" className="lg:hover:underline hover:text-underline-offset-6 transition">PLAYLIST</a></li>
                            <li><a href="#fotos" className="lg:hover:underline hover:text-underline-offset-6 transition">FOTOS</a></li>
                            <li><a href="#confirmar" className="lg:hover:underline hover:text-underline-offset-6 transition">CONFIRMAR</a></li>
                            <li><a href="#recuerdos" className="lg:hover:underline hover:text-underline-offset-6 transition">RECUERDOS</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-x-4">
                    <MusicButton />
                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden bg-cream shadow-xl rounded-full px-6 py-4 flex items-center gap-2 hover:bg-parchment/80 cursor-pointer transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-4 h-4" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                    </button>
                </div>
            </header>
            {isMenuOpen && <DropdowMenu onCloseMenu={handleCloseMenu} />}
        </>
    )
}