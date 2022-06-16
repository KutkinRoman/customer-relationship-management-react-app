import {IColor, ICustomPalette} from "./types";

class DarkPalette implements ICustomPalette {
    readonly mode = 'dark';
    primaryColor
    primaryContrastText = 'rgba(236,236,236, 1)'
    secondaryColor
    secondaryContrastText = 'rgba(236,236,236, 1)'
    textColor = 'rgba(236,236,236, 1)'
    backgroundColor = 'rgba(16,20,26, 1)'
    successColor = 'rgb(41,180,49)'
    errorColor = 'rgb(180,43,43)'
    infoColor = 'rgb(60,89,185)'
    warningColor = 'rgb(182,157,51)'

    constructor(color: IColor) {
        this.primaryColor = color.primary;
        this.secondaryColor = color.secondary;
        // makeAutoObservable(this)
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

export {
    DarkPalette
}