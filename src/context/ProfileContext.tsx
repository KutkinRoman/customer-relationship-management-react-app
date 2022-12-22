import React, {createContext, FC, useContext, useState} from 'react';
import {PersonFull} from "../model/person/PersonFull";
import {PersonService} from "../service/PersonService";
import {Params} from 'react-router-dom'

interface ProfileParams extends Params {
    // @ts-ignore
    personId: number
}

interface ProfileContextProps {
    children: React.ReactNode
}

interface IProfile {
    isLoading: boolean
    person: PersonFull | null,
    fetchPerson: (personId: number | undefined) => void
}

const useProfile = () => useContext(ProfileContext)

const ProfileContext = createContext<IProfile>({} as IProfile)

const ProfileContextProvider: FC<ProfileContextProps> = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [person, setPerson] = useState<PersonFull | null>(null)

    const fetchPerson = async (personId: number | undefined) => {
        if (personId) {
            setIsLoading(true)
            try {
                const response = await PersonService.getPersonById(personId);
                setPerson(response.data)
            } catch (e) {
                setPerson(null)
            } finally {
                setIsLoading(false)
            }
        } else {
            setPerson(null)
        }
    }

    return (
        <ProfileContext.Provider value={{
            isLoading,
            person,
            fetchPerson
        }}>
            {children}
        </ProfileContext.Provider>
    );
};

export {
    ProfileContextProvider,
    useProfile,
}

export type {
    ProfileParams
}