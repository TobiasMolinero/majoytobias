import { MusicProvider } from "./Music/MusicContext";
import { Header } from "./Header";
// import { InvitationIntro } from "./InvitationIntro";

export const WeddingApp = () => {
    return (
        <MusicProvider>
            {/* <InvitationIntro /> */}
            <Header />
        </MusicProvider>
    );
};