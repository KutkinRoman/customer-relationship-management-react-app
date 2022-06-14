import React, {FC} from 'react';
import {Box, TextField} from "@mui/material";
import PersonSearchMenu from "./PersonSearchMenu";
import classes from './index.module.css'
import {PersonResultSearch} from "../../../../model/person/PersonResultSearch";

interface PersonSearchInputProps {
    query: string
    handleOnChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    persons: PersonResultSearch[]
    handleRegistrationByPerson: (person: PersonResultSearch) => void
    handleFormByPerson: (person: PersonResultSearch) => void
}

const PersonSearchInput: FC<PersonSearchInputProps> =
    ({
         query,
         handleOnChangeSearch,
         persons,
         handleRegistrationByPerson,
         handleFormByPerson
     }) => {

        const borderRadius = () => {
            return persons.length > 0 ? '5px' : '20px'
        }

        const backgroundColor = (): string => {
            return persons.length > 0 ? 'primary.light' : 'background.paper'
        }

        return (
            <Box
                className={classes.container}
                sx={{borderRadius, backgroundColor}}
            >
                <TextField
                    fullWidth
                    id={'personSearchInput'}
                    autoComplete={'off'}
                    label={'Поиск'}
                    variant={'outlined'}
                    color={'secondary'}
                    value={query}
                    onChange={handleOnChangeSearch}
                    InputProps={{sx: {borderRadius}}}
                />
                <PersonSearchMenu
                    backgroundColor={backgroundColor()}
                    persons={persons}
                    handleRegistrationByPerson={handleRegistrationByPerson}
                    handleFormByPerson={handleFormByPerson}
                />
            </Box>
        );
    };

export default PersonSearchInput;