import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {CustomThemeContextProvider} from "./context/CustomThemeContext";
import {AppRoutesProvider} from "./router/AppRoutesProvider";
import {AlertContentProvider} from "./context/AlertContext";
import {LocalizationContextProvider} from "./context/LocalizationContext";
import {CalendarThemeContextProvider} from "./context/CalendarThemeContext";


function App() {
    return (
        <CustomThemeContextProvider>
            <CalendarThemeContextProvider>
                <AlertContentProvider>
                    <LocalizationContextProvider>
                        <BrowserRouter>
                            <AppRoutesProvider/>
                        </BrowserRouter>
                    </LocalizationContextProvider>
                </AlertContentProvider>
            </CalendarThemeContextProvider>
        </CustomThemeContextProvider>
    )
}

export default App;
