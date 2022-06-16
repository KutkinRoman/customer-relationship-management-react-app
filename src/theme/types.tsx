import {PaletteMode, Theme} from "@mui/material";

export interface ICustomTheme {
    theme: Theme;
    palette: ICustomPalette
    isUpdate: boolean
    isLoading: boolean

    lightTheme: () => void
    darkTheme: () => void
    changeTheme: () => void
    update: () => void
    save: () => void
}

export interface IColor {
    primary: string,
    secondary: string
}

export interface ICustomPalette {
    mode: PaletteMode,

    primaryColor: string,
    primaryContrastText: string,
    secondaryColor: string,
    secondaryContrastText: string,
    textColor: string,
    backgroundColor: string,

    successColor: string,
    errorColor: string,
    infoColor: string,
    warningColor: string,


    setPrimaryColor: (color: string) => void
    setSecondaryColor: (color: string) => void
    setTextColor: (color: string) => void
    setBackgroundColor: (color: string) => void
}


