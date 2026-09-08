import { useState } from "react";
import SoundOn from "./icons/SoundOn.astro";
import SoundOff from "./icons/SoundOff.astro";

export const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
        // const audio = document.getElementById("background-audio") as HTMLAudioElement;
        // if (audio) {
        //     if (isPlaying) {
        //         audio.pause();
        //     } else {
        //         audio.play();
        //     }
        // }
    }

    return(
        <button
            onClick={handleClick}
            className="bg-cream shadow-xl rounded-full px-6 py-4 font-body text-sm text-charcoal flex items-center gap-2 hover:bg-parchment/80 cursor-pointer transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-music w-3.5 h-3.5 text-[#656D4A]" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            Musica {isPlaying ? "On" : "Off"}
            {
                isPlaying ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume2 lucide-volume-2 w-3.5 h-3.5 text-[#656D4A]" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-x w-3.5 h-3.5 text-[#9C9286]" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>
            }
        </button>
    )
}