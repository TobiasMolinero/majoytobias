import { useState } from "react";
import { useMusic } from "./Music/MusicContext";

export const InvitationIntro = () => {
    const { playMusic } = useMusic();

    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpenInvitation = async () => {
        try {
            await playMusic();
        } catch (error) {
            console.error("No se pudo reproducir la música:", error);
        }

        setIsClosing(true);

        setTimeout(() => {
            setIsOpen(false);
        }, 700)
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={`
                fixed inset-0 z-[999] flex min-h-screen flex-col items-center justify-center
                bg-cream px-6 text-center
                transition-opacity duration-700 ease-in-out
                ${isClosing ? "opacity-0" : "opacity-100"}
            `}>
            <p className="font-small-caps text-sm tracking-[0.3em] text-charcoal">
                Nuestra boda
            </p>

            <h1 className="mt-6 font-title text-6xl text-charcoal">
                M & T
            </h1>

            <p className="mt-6 max-w-md font-body text-base text-charcoal tracking-widest">
                Tenemos una invitación muy especial para vos.
            </p>

            <button
                onClick={handleOpenInvitation}
                disabled={isClosing}
                className="mt-10 rounded-full bg-petroleum px-8 py-4 font-small-caps text-sm font-semibold tracking-wider text-ivory shadow-xl transition cursor-pointer"
            >
                Abrir invitación
            </button>
        </div>
    );
};