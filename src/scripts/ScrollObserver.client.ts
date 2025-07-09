import { navigate } from "astro:transitions/client";

export default function useScrollObserver(navigateOnBottom: string | null, navigateOnTop: string | null): void {
    const handleScroll = (wheelEvent: WheelEvent) => {
        const scrollDirection = wheelEvent.deltaY;

        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
    
        if (scrollY + clientHeight >= scrollHeight - 10 && scrollDirection > 0) {
            if (navigateOnBottom) {
                navigate(navigateOnBottom);
            }
        } else if (scrollY <= 10 && scrollDirection < 0) {
            if (navigateOnTop) {
                navigate(navigateOnTop);
            }
        }
    };

    window.addEventListener("wheel", handleScroll);
    console.log("Scroll observer initialized");
}