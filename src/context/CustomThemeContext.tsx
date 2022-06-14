import React, {createContext, FC} from 'react';
import {ICustomTheme} from "../theme/types";
import {CustomTheme} from "../theme/CustomTheme";
import {CustomDarkPalette} from "../theme/CustomDarkTheme";
import {ThemeProvider} from "@mui/material";

interface CustomThemeContextProviderProps {
    children: React.ReactNode
}

const customTheme = new CustomTheme(new CustomDarkPalette())

const CustomThemeContextProvider: FC<CustomThemeContextProviderProps> = ({children}) => {
    return (
        <CustomThemeContext.Provider value={customTheme}>
            <ThemeProvider theme={customTheme.theme}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

const CustomThemeContext = createContext<ICustomTheme | null>(null)

export {
    CustomThemeContextProvider
}