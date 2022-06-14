import React, {createContext, FC} from 'react';
import useModal from "../hooks/useModal";
import PersonFormDialog from "../components/crm/person/form/PersonFormDialog";
import {PersonFull} from "../model/person/PersonFull";
import {PersonFormStore} from "../store/person/PersonFormStore";
import {PersonService} from "../service/PersonService";

interface PersonFormContextProps {
    children: React.ReactNode
}

const personFormStore = new PersonFormStore()

const PersonFormContextProvider: FC<PersonFormContextProps> = ({children}) => {

    const {isOpen, handleOpen, handleClose} = useModal()

    const initFormByPerson = (person: PersonFull) => {
        personFormStore.setPerson(person)
        handleOpen()
    }

    const initFormByPersonId = async (personId: number) => {
        const response = await PersonService.getPersonById(personId)
        personFormStore.setPerson(new PersonFull(response.data))
        handleOpen()
    }

    const initFormNewPerson = () => {
        personFormStore.setIsNew(true)
        personFormStore.setPerson(undefined)
        handleOpen()
    }

    return (
        <PersonFormContext.Provider
            value={{
                initFormByPerson: initFormByPerson,
                initFormByPersonId: initFormByPersonId,
                initFormNewPerson: initFormNewPerson
            }}
        >
            {children}
            <PersonFormDialog
                isOpen={isOpen}
                handleClose={handleClose}
                personFormStore={personFormStore}
            />
        </PersonFormContext.Provider>
    );
};

const PersonFormContext = createContext({
    initFormByPerson: (person: PersonFull) => {
    },
    initFormByPersonId: (personId: number) => {
    },
    initFormNewPerson: () => {
    }
})

export {
    PersonFormContextProvider,
    PersonFormContext
}
