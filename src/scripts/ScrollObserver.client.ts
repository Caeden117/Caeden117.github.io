import { navigate } from "astro:transitions/client";

export default function useScrollObserver(navigateOnBottom: string | null, navigateOnTop: string | null): void {
    const currentUrl = window.location.pathname;
    const handleScroll = (wheelEvent: WheelEvent) => {
        // Early return if the current URL does not match the window location
        // This prevents the scroll observer from triggering on other pages
        // It is frankly kinda stupid but whatever
        if (currentUrl !== window.location.pathname) {
            return;
        }

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