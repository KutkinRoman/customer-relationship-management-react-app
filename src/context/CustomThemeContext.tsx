import React, {createContext, FC} from 'react';
import {ICustomTheme} from "../theme/types";
import {CustomTheme} from "../theme/CustomTheme";
import {ThemeProvider} from "@mui/material";
import {observer} from "mobx-react-lite";

interface CustomThemeContextProviderProps {
    children: React.ReactNode
}

const customTheme = new CustomTheme()

const CustomThemeContextProvider: FC<CustomThemeContextProviderProps> = observer(
    ({
         children
     }) => {

        return (
            <ThemeProvider
                theme={customTheme.theme}
            >
                {children}
            </ThemeProvider>
        );
    });

const CustomThemeContext = createContext<ICustomTheme>(customTheme)

export {
    CustomThemeContextProvider,
    CustomThemeContext
}