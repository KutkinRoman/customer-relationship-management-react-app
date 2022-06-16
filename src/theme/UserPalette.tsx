import {ICustomPalette} from "./types";
import {PaletteMode} from "@mui/material";

export class UserPalette implements ICustomPalette {
    mode: PaletteMode
    primaryColor: string
    primaryContrastText: string
    secondaryColor: string
    secondaryContrastText: string
    textColor: string
    backgroundColor: string
    successColor: string
    errorColor: string
    infoColor: string
    warningColor: string


    constructor(palette: ICustomPalette) {
        this.mode = palette.mode;
        this.primaryColor = palette.primaryColor;
        this.primaryContrastText = palette.primaryContrastText;
        this.secondaryColor = palette.secondaryColor;
        this.secondaryContrastText = palette.secondaryContrastText;
        this.textColor = palette.textColor;
        this.backgroundColor = palette.backgroundColor;
        this.successColor = palette.successColor;
        this.errorColor = palette.errorColor;
        this.infoColor = palette.infoColor;
        this.warningColor = palette.warningColor;
    }

    setPrimaryColor(color: string): void {
        this.primaryColor = color
    }

    setSecondaryColor(color: string): void {
        this.secondaryColor = color
    }

    setBackgroundColor(color: string): void {
        this.backgroundColor = color
    }

    setTextColor(color: string): void {
        this.textColor = color
    }


}