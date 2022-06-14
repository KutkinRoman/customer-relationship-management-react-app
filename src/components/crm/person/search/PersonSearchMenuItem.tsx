import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import classes from './index.module.css'
import AppButton from "../../../UI/button/AppButton";
import {PersonResultSearch} from "../../../../model/person/PersonResultSearch";

interface PersonSearchMenuItemProps {
    person: PersonResultSearch
    handleRegistrationByPerson: (person: PersonResultSearch) => void
    handleFormByPerson: (person: PersonResultSearch) => void
}

const personSearchMenuItemStyles = {
    ":hover": {
        backgroundColor: 'secondary.dark'
    }
}

const PersonSearchMenuItem: FC<PersonSearchMenuItemProps> =
    ({
         person,
         handleRegistrationByPerson,
         handleFormByPerson
     }) => {
        return (
            <Box
                component={'li'}
                className={classes.menuItem}
                sx={{...personSearchMenuItemStyles}}
            >
                <Box
                    className={classes.content}
                >
                    <Box
                        className={classes.name}
                        onClick={() => handleRegistrationByPerson(person)}
                    >
                        <Typography
                            variant={'body1'}
                            color={'text.primary'}
                        >
                            {person.fullName}
                        </Typography>
                    </Box>
                    {/*{person.activeOrdersInfo &&*/}
                    {/*    <Typography*/}
                    {/*        variant={'subtitle1'}*/}
                    {/*        bgcolor={'info.main'}*/}
                    {/*        color={'text.primary'}*/}
                    {/*        className={classes.ordersInfo}*/}
                    {/*    >*/}
                    {/*        {person.activeOrdersInfo}*/}
                    {/*    </Typography>*/}
                    {/*}*/}
                </Box>
                <Box
                    className={classes.action}
                >
                    {/*{person.request &&*/}
                    {/*    <Box*/}
                    {/*        className={classes.actionBtn}*/}
                    {/*    >*/}
                    {/*        <Badge*/}
                    {/*            color={'success'}*/}
                    {/*            badgeContent={person.request.createDate}*/}
                    {/*        >*/}
                    {/*            <AppButton*/}
                    {/*                size={'small'}*/}
                    {/*                variant={'contained'}*/}
                    {/*                tooltipTitle={'Перейти к заявке'}*/}
                    {/*            >*/}
                    {/*                Заявка*/}
                    {/*            </AppButton>*/}
                    {/*        </Badge>*/}
                    {/*    </Box>*/}
                    {/*}*/}
                    <Box
                        className={classes.actionBtn}
                    >
                        <AppButton
                            size={'small'}
                            variant={'contained'}
                            tooltipTitle={'Персональные данные'}
                            onClick={() => handleFormByPerson(person)}
                        >
                            ИНФО
                        </AppButton>
                    </Box>
                </Box>
            </Box>
        );
    };

export default PersonSearchMenuItem;