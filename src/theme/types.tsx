import {PaletteMode, Theme} from "@mui/material";

export interface ICustomTheme {
    palette: ICustomPalette
    theme: Theme
}

export interface ICustomPalette {
    mode: PaletteMode,

    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    backgroundColor: string,
    lineColor: string,
    navBarColor: string
    shadowsColor: string

    successColor: string,
    errorColor: string,
    infoColor: string,
    warningColor: string,

}