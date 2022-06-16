import {ICustomPalette} from "../theme/types";
import {createTheme, Theme} from "@mui/material";
import {ColorUtils} from "./ColorUtils";
import {Shadows} from "@mui/material/styles/shadows";
import {DarkPalette} from "../theme/DarkPalette";
import {colors} from "../theme/Colors";
import {LightPalette} from "../theme/LightPalette";

export class ThemeUtils {

    public static createTheme = (
        palette: ICustomPalette
    ): Theme => {
        return createTheme({

                palette: {

                    mode: palette.mode,

                    success: {
                        light: ColorUtils.lighterColor(palette.successColor, 0.05),
                        main: palette.successColor,
                        dark: ColorUtils.darkerColor(palette.successColor, 0.05),
                    },

                    error: {
                        light: ColorUtils.lighterColor(palette.errorColor, 0.05),
                        main: palette.errorColor,
                        dark: ColorUtils.darkerColor(palette.errorColor, 0.05),
                    },

                    info: {
                        light: ColorUtils.lighterColor(palette.infoColor, 0.05),
                        main: palette.infoColor,
                        dark: ColorUtils.darkerColor(palette.infoColor, 0.05),
                    },

                    warning: {
                        light: ColorUtils.lighterColor(palette.warningColor, 0.05),
                        main: palette.warningColor,
                        dark: ColorUtils.darkerColor(palette.warningColor, 0.05),
                    },

                    secondary: {
                        light: ColorUtils.transparentRGBA(ColorUtils.lighterColor(palette.secondaryColor, 0.2), 0.98),
                        main: palette.secondaryColor,
                        dark: ColorUtils.darkerColor(palette.secondaryColor, 0.2),
                        contrastText: palette.secondaryContrastText,
                    },

                    primary: {
                        light: ColorUtils.transparentRGBA(ColorUtils.lighterColor(palette.primaryColor, 0.2), 0.98),
                        main: palette.primaryColor,
                        dark: ColorUtils.darkerColor(palette.primaryColor, 0.2),
                        contrastText: palette.primaryContrastText,
                    },

                    text: {
                        primary: ColorUtils.transparentRGBA(palette.textColor, 0.95),
                        secondary: ColorUtils.transparentRGBA(palette.textColor, 0.75),
                        disabled: ColorUtils.transparentRGBA(palette.textColor, 0.33),
                    },

                    action: {
                        active: ColorUtils.lighterColor(palette.secondaryColor, 0.1),
                        hover: ColorUtils.transparentRGBA(palette.primaryColor, 0.05),
                        selected: ColorUtils.transparentRGBA(palette.primaryColor, 0.1),
                        disabled: ColorUtils.transparentRGBA(palette.primaryColor, 0.2),
                        disabledBackground: ColorUtils.transparentRGBA(palette.backgroundColor, 0.12)
                    },

                    background: {
                        default: palette.backgroundColor,
                        paper: ColorUtils.transparentRGBA(palette.backgroundColor, 0.98),
                        // @ts-ignore
                        linearGradient: `linear-gradient(${ColorUtils.transparentRGBA(palette.backgroundColor, 0.2)} 0%, ${ColorUtils.darkerColor(palette.textColor, 0.2)} 75%)`
                    },

                    divider: ColorUtils.transparentRGBA(palette.textColor, 0.09),

                    // @ts-ignore
                    navbar: {
                        linearGradient: `linear-gradient(${ColorUtils.transparentRGBA(palette.backgroundColor, 0.6)} 0%, ${palette.backgroundColor} 75%)`
                    },
                    // @ts-ignore
                    input: {
                        container: ColorUtils.transparentRGBA(palette.textColor, 0.05)
                    }

                },

                shadows: ThemeUtils.createShadows(palette.textColor)

            }
        );
    }

    public static createShadows(color: string): Shadows {
        const shadows: Shadows = ['none', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        for (let i = 1; i < shadows.length; i++) {
            shadows[i] = `0 0 ${i}px ${i}px ${ColorUtils.transparentRGBA(color, 0.2)}`
        }
        return shadows
    }

    public static darkPalette() {
        return new DarkPalette(colors[1])
    }

    public static lightPalette() {
        return new LightPalette(colors[1])
    }
}