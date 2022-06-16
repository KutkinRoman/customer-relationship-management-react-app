import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {CustomThemeContextProvider} from "./context/CustomThemeContext";
import {AppRoutesProvider} from "./router/AppRoutesProvider";
import {AlertContentProvider} from "./context/AlertContext";
import {LocalizationContextProvider} from "./context/LocalizationContext";


function App() {
    return (
        <CustomThemeContextProvider>
            <AlertContentProvider>
                <LocalizationContextProvider>
                    <BrowserRouter>
                        <AppRoutesProvider/>
                    </BrowserRouter>
                </LocalizationContextProvider>
            </AlertContentProvider>
        </CustomThemeContextProvider>
    )
}

export default App;
