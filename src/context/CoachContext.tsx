import React, {createContext, FC, useEffect} from "react";
import {CoachStore} from "../store/coach/CoachStore";

interface CoachContextProviderProps {
    children: React.ReactNode
}

const coachStore = new CoachStore()

const CoachContextProvider: FC<CoachContextProviderProps> = ({children}) => {

    useEffect(() => {
        if (!coachStore.isLoading) {
            coachStore.fetch()
        }
    }, [])

    return (
        <CoachContext.Provider
            value={coachStore}
        >
            {children}
        </CoachContext.Provider>
    );
};

const CoachContext = createContext<CoachStore | undefined>(undefined)

export {
    CoachContextProvider,
    CoachContext
};