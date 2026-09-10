export const DropdowMenu = ({ 
    onCloseMenu 
}: { onCloseMenu: () => void }) => {
    return (
        <nav className="lg:hidden sticky top-0 left-0 w-full h-screen bg-ivory flex flex-col px-10 py-8 z-100">
            <button className="self-end p-4 cursor-pointer" onClick={onCloseMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x w-6 h-6" aria-hidden="true">
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            </button>
            <ul className="flex flex-col items-center gap-y-4 p-4">
                <li><a href="#inicio" className="font-body text-petroleum" onClick={onCloseMenu}>INICIO</a></li>
                <li><a href="#cuenta-regresiva" className="font-body text-petroleum" onClick={onCloseMenu}>CUENTA REGRESIVA</a></li>
                <li><a href="#lugar" className="font-body text-petroleum" onClick={onCloseMenu}>DONDE</a></li>
                <li><a href="#dress-code" className="font-body text-petroleum" onClick={onCloseMenu}>DRESS CODE</a></li>
                <li><a href="#regalos" className="font-body text-petroleum" onClick={onCloseMenu}>REGALOS</a></li>
                {/* <li><a href="#playlist" className="font-body text-petroleum" onClick={onCloseMenu}>PLAYLIST</a></li> */}
                {/* <li><a href="#fotos" className="font-body text-petroleum" onClick={onCloseMenu}>FOTOS</a></li> */}
                <li><a href="#confirmar" className="font-body text-petroleum" onClick={onCloseMenu}>CONFIRMAR</a></li>
                {/* <li><a href="#recuerdos" className="font-body text-petroleum" onClick={onCloseMenu}>RECUERDOS</a></li> */}
            </ul>
        </nav>
    )
}