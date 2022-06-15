import React from 'react';
import {ICustomPalette} from "./types";
import {PaletteMode} from "@mui/material";

class CustomDarkPalette implements ICustomPalette {
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
    shadowsColor: string

    constructor() {
        this.mode = 'light';

        this.primaryColor = 'rgba(250, 84, 28, 1)'
        this.primaryContrastText = 'rgba(255,255,255, 1)'


        this.secondaryColor = 'rgb(34, 184, 207)'
        this.secondaryContrastText = 'rgba(255, 255, 255, 1)'

        this.textColor = 'rgb(12,12,12)'

        this.backgroundColor = 'rgba(255,255,255, 1)'

        this.shadowsColor = 'rgba(255, 255, 255, 1)'


        this.successColor = 'rgb(8,108,16)'
        this.errorColor = 'rgba(227,29,29, 1)'
        this.infoColor = 'rgba(8,39,157, 1)'
        this.warningColor = 'rgba(236,196,5, 1)'
    }
}

export {
    CustomDarkPalette
}