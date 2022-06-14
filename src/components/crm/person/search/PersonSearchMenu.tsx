import React, {FC} from 'react';
import {Box} from "@mui/material";
import PersonSearchMenuItem from "./PersonSearchMenuItem";
import classes from './index.module.css'
import {PersonResultSearch} from "../../../../model/person/PersonResultSearch";

interface PersonSearchMenuProps {
    persons: PersonResultSearch[]
    backgroundColor: string
    handleRegistrationByPerson: (person: PersonResultSearch) => void
    handleFormByPerson: (person: PersonResultSearch) => void
}

const PersonSearchMenu: FC<PersonSearchMenuProps> =
    ({
         persons,
         backgroundColor,
         handleRegistrationByPerson,
         handleFormByPerson
     }) => {
        return (
            <Box
                component={'ul'}
                className={classes.menu}
                sx={{backgroundColor}}
            >
                {persons.map(person =>
                    <PersonSearchMenuItem
                        key={`PersonSearchMenuItem_${person.id}`}
                        person={person}
                        handleRegistrationByPerson={handleRegistrationByPerson}
                        handleFormByPerson={handleFormByPerson}
                    />
                )}
            </Box>
        );
    };

export default PersonSearchMenu;