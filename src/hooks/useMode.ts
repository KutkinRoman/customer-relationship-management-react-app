import {useEffect, useMemo, useState} from "react";
import {createTheme, PaletteMode} from "@mui/material";

export const useMode = (nameLocalStorage: string) => {

    const [mode, setMode] = useState<PaletteMode>('light')

    const changeMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        localStorage.setItem(nameLocalStorage, newMode)
    }

    const theme = useMemo(() => {

        return createTheme(
            {
                palette: {
                    mode
                }
            }
        )
    }, [mode])

    useEffect(() => {
        const modeLocalStorage = localStorage.getItem(nameLocalStorage)
        if (modeLocalStorage) {
            setMode(modeLocalStorage as "light" | "dark")
        }
    }, [])

    return {
        mode,
        changeMode,
        theme
    }
}