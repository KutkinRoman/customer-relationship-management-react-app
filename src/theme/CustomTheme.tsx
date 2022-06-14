import {createTheme, Theme} from "@mui/material";
import {ColorUtils} from "../utils/ColorUtils";
import {ICustomPalette, ICustomTheme} from "./types";
import {Shadows} from "@mui/material/styles/shadows";

class CustomTheme implements ICustomTheme {
    palette: ICustomPalette;
    shadows: Shadows
    theme: Theme;

    constructor(palette: ICustomPalette) {
        this.palette = palette;
        this.shadows = this.createShadows()
        this.theme = this.createTheme();
    }

    createTheme = (): Theme => {
        return createTheme({

                palette: {

                    mode: this.palette.mode,

                    success: {
                        light: ColorUtils.lighterColor(this.palette.successColor, 0.05),
                        main: this.palette.successColor,
                        dark: ColorUtils.darkerColor(this.palette.successColor, 0.05),
                    },

                    error: {
                        light: ColorUtils.lighterColor(this.palette.errorColor, 0.05),
                        main: this.palette.errorColor,
                        dark: ColorUtils.darkerColor(this.palette.errorColor, 0.05),
                    },

                    info: {
                        light: ColorUtils.lighterColor(this.palette.infoColor, 0.05),
                        main: this.palette.infoColor,
                        dark: ColorUtils.darkerColor(this.palette.infoColor, 0.05),
                    },

                    warning: {
                        light: ColorUtils.lighterColor(this.palette.warningColor, 0.05),
                        main: this.palette.warningColor,
                        dark: ColorUtils.darkerColor(this.palette.warningColor, 0.05),
                    },

                    secondary: {
                        light: ColorUtils.lighterColor(this.palette.secondaryColor, 0.05),
                        main: this.palette.secondaryColor,
                        dark: ColorUtils.darkerColor(this.palette.secondaryColor, 0.05),
                        contrastText: this.palette.textColor,
                    },

                    primary: {
                        light: ColorUtils.lighterColor(this.palette.primaryColor, 0.05),
                        main: this.palette.primaryColor,
                        dark: ColorUtils.darkerColor(this.palette.primaryColor, 0.05),
                        contrastText: this.palette.textColor,
                    },

                    text: {
                        primary: ColorUtils.transparentRGBA(this.palette.textColor, 0.95),
                        secondary: ColorUtils.transparentRGBA(this.palette.textColor, 0.80),
                        disabled: ColorUtils.transparentRGBA(this.palette.textColor, 0.33),
                    },

                    action: {
                        active: ColorUtils.lighterColor(this.palette.textColor, 0.1),
                        hover: ColorUtils.transparentRGBA(this.palette.textColor, 0.20),
                        selected: ColorUtils.transparentRGBA(this.palette.secondaryColor, 0.20),
                        disabled: ColorUtils.transparentRGBA(this.palette.textColor, 0.30),
                        disabledBackground: ColorUtils.transparentRGBA(this.palette.backgroundColor, 0.12)
                    },

                    background: {
                        default: this.palette.backgroundColor,
                        paper: ColorUtils.transparentRGBA(this.palette.backgroundColor, 0.97)
                    },

                    divider: ColorUtils.transparentRGBA(this.palette.textColor, 0.12),

                    // @ts-ignore
                    navbar: this.palette.navBarColor,
                },

                shadows: this.shadows

            }
        );
    }

    createShadows(): Shadows {
        const shadows: Shadows = ['none', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        for (let i = 1; i < shadows.length; i++) {
            shadows[i] = `0 0 ${i}px ${i}px ${ColorUtils.transparentRGBA(this.palette.shadowsColor, 0.2)}`
        }
        return shadows
    }
}

export {
    CustomTheme
}


