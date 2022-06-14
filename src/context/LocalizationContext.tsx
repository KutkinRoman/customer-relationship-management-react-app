import React, {createContext, FC} from 'react';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';


const localeMap = {
    en: enLocale,
    fr: frLocale,
    ru: ruLocale,
    de: deLocale,
};

const maskMap = {
    fr: '__/__/____',
    en: '__/__/____',
    ru: '__.__.____',
    de: '__.__.____',
};

interface LocalizationContextProviderProps {
    children: React.ReactNode
}

const LocalizationContextProvider: FC<LocalizationContextProviderProps> = ({children}) => {

    const [locale, setLocale] = React.useState<keyof typeof maskMap>('ru');

    return (
        <LocalizationContext.Provider
            value={{
                mask: maskMap[locale],
            }}
        >
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={localeMap[locale]}
            >
                {children}
            </LocalizationProvider>
        </LocalizationContext.Provider>
    );
};

const LocalizationContext = createContext({
    mask: ''
})

export {
    LocalizationContext,
    LocalizationContextProvider
};