import React, {createContext, FC, useEffect} from "react";
import {CoachingDirectionStore} from "../store/coach/CoachingDirectionStore";

interface CoachingContextProviderProps {
    children: React.ReactNode
}

const coachingDirectionStore = new CoachingDirectionStore()

const CoachingContextProvider: FC<CoachingContextProviderProps> = ({children}) => {

    useEffect(() => {
        if (!coachingDirectionStore.isLoading) {
            coachingDirectionStore.fetch()
        }
    }, [])

    return (
        <CoachingContext.Provider
            value={coachingDirectionStore}
        >
            {children}
        </CoachingContext.Provider>
    );
};

const CoachingContext = createContext<CoachingDirectionStore | undefined>(undefined)

export {
    CoachingContextProvider,
    CoachingContext
};