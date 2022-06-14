import React, {createContext, FC} from 'react';
import {useMode} from "../hooks/useMode";

interface Props {
    children: React.ReactNode
}

const CalendarThemeContextProvider: FC<Props> = ({children}) => {

    const mode = useMode('calendarMode')

    return (
        <CalendarThemeContext.Provider
            value={mode}
        >
            {children}
        </CalendarThemeContext.Provider>
    );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const CalendarThemeContext = createContext<any>({})


export {
    CalendarThemeContextProvider,
    CalendarThemeContext
};