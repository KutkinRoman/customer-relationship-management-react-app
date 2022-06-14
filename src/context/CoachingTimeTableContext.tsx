import React, {createContext, FC} from 'react';
import {CoachingTimeTableStore} from "../store/coach/CoachingTimeTableStore";

const store = new CoachingTimeTableStore();

interface Props {
    children: React.ReactNode
}

const CoachingTimeTableContextProvider: FC<Props> = ({children}) => {
    return (
        <CoachingTimeTableContext.Provider
            value={store}
        >
            {children}
        </CoachingTimeTableContext.Provider>
    );
};

const CoachingTimeTableContext = createContext<CoachingTimeTableStore | undefined>(undefined)

export {
    CoachingTimeTableContextProvider,
    CoachingTimeTableContext
};