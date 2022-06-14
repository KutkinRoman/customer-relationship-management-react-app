import React from 'react';
import {ICustomPalette} from "./types";
import {PaletteMode} from "@mui/material";

class CustomDarkPalette implements ICustomPalette {
    mode: PaletteMode
    primaryColor: string
    secondaryColor: string
    textColor: string
    backgroundColor: string
    lineColor: string
    successColor: string
    errorColor: string
    infoColor: string
    warningColor: string
    navBarColor: string
    shadowsColor: string

    constructor() {
        this.mode = 'dark';

        // this.primaryColor = 'rgb(192,90,208)'
        // this.secondaryColor = 'rgb(102,16,187)'
        // this.textColor = 'rgba(236,236,236,0.7)'
        // this.backgroundColor = 'rgb(45,3,51)'
        // this.shadowsColor = 'rgb(207,0,255)'
        // this.navBarColor = 'rgb(237,160,250)'

        this.primaryColor = 'rgba(16, 16, 16, 1)'
        this.secondaryColor = 'rgb(54,135,208)'
        this.textColor = 'rgba(255, 255, 255, 1)'
        this.backgroundColor = 'rgba(40, 40, 40, 1)'
        this.shadowsColor = 'rgba(255, 255, 255, 1)'
        this.navBarColor = 'rgba(176, 176, 176, 1)'

        this.lineColor = 'rgba(255,255,255, 1)'
        this.successColor = 'rgba(24,154,34, 1)'
        this.errorColor = 'rgba(227,29,29, 1)'
        this.infoColor = 'rgba(8,39,157, 1)'
        this.warningColor = 'rgba(236,196,5, 1)'
    }
}

export {
    CustomDarkPalette
}