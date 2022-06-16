import {IColor, ICustomPalette} from "./types";
import {makeAutoObservable} from "mobx";


class LightPalette implements ICustomPalette {
    readonly mode = 'light';
    primaryColor
    primaryContrastText = 'rgba(236,236,236, 1)'
    secondaryColor
    secondaryContrastText = 'rgba(236,236,236, 1)'
    textColor = 'rgb(30,29,29)'
    backgroundColor = 'rgba(236,236,236, 1)'
    successColor = 'rgb(0,122,9)'
    errorColor = 'rgb(140,0,0)'
    infoColor = 'rgba(8,39,157, 1)'
    warningColor = 'rgb(155,121,2)'

    constructor(color: IColor) {
        this.primaryColor = color.primary;
        this.secondaryColor = color.secondary;
        makeAutoObservable(this)
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
    LightPalette
}