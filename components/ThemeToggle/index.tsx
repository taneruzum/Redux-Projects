import { useAppSelector } from "@/lib/hook";
import { MoonFilledIcon, SunFilledIcon } from "@/public/icon";
import { handleToggleTheme, initializeTheme } from "@/utils/themeUtils";
import { useLayoutEffect } from "react";


export default function ToggleThemeButton() {
    const isDarkMode = useAppSelector((state: any) => state.themeSlice.isDarkMode)

    useLayoutEffect(() => {
        initializeTheme();
    }, []);

    const toggleTheme = () => {
        handleToggleTheme()
    };

    return (
        <button
            className="w-fit h-fit p-3 bg-primary rounded-full custom-shadow"
            onClick={toggleTheme}
        >
            {isDarkMode ? (
                <SunFilledIcon className="dark:text-yellow-400" />
            ) : (
                <MoonFilledIcon className="text-stone-500" />
            )}
        </button>
    )
}
