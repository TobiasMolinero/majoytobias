import {
    createContext,
    useContext,
    useRef,
    useState,
    type ReactNode,
} from "react";

type MusicContextType = {
    isPlaying: boolean;
    playMusic: () => Promise<void>;
    pauseMusic: () => void;
    toggleMusic: () => Promise<void>;
};

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const getAudio = () => {
        if (!audioRef.current) {
            const audio = new Audio("/music/taylor-swift-enchanted.mp3");

            audio.loop = true;
            audio.volume = 0.3;

            audio.addEventListener("play", () => {
                setIsPlaying(true);
            });

            audio.addEventListener("pause", () => {
                setIsPlaying(false);
            });

            audioRef.current = audio;
        }

        return audioRef.current;
    };

    const playMusic = async () => {
        const audio = getAudio();

        await audio.play();
    };

    const pauseMusic = () => {
        const audio = getAudio();

        audio.pause();
    };

    const toggleMusic = async () => {
        const audio = getAudio();

        if (audio.paused) {
            await audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <MusicContext.Provider
            value={{
                isPlaying,
                playMusic,
                pauseMusic,
                toggleMusic,
            }}
        >
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    const context = useContext(MusicContext);

    if (!context) {
        throw new Error("useMusic debe utilizarse dentro de MusicProvider");
    }

    return context;
};