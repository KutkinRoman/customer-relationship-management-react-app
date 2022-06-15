import {PaletteMode, Theme} from "@mui/material";

export interface ICustomTheme {
    palette: ICustomPalette
    theme: Theme
}

export interface ICustomPalette {
    mode: PaletteMode,

    primaryColor: string,
    primaryContrastText: string,
    secondaryColor: string,
    secondaryContrastText: string,
    textColor: string,
    backgroundColor: string,
    shadowsColor: string

    successColor: string,
    errorColor: string,
    infoColor: string,
    warningColor: string,

}