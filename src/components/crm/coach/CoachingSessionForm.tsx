import React, {FC, useContext, useEffect} from 'react';
import {ICoachingSession} from "../../../model/coach/CoachingSession";
import {useForm} from "react-hook-form";
import AppDateTimePickerController from "../../UI/form/AppDateTimePickerController";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import {Box, Card, MenuItem, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {CoachContext} from "../../../context/CoachContext";
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AppIconButton from "../../UI/button/AppIconButton";

const SessionCardStyled = styled(Card)(({theme}) => ({
    marginBottom: '5px',
    display: 'flex',
    padding: '5px',
    alignItems: 'center',
    border: 'solid 1px',
    borderColor: theme.palette.primary.light
}))

const SessionFormStyled = styled(Box)(({theme}) => ({
    flex: 1,
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    // border: 'solid 1px',
    // borderRadius: '10px',
    // borderColor: theme.palette.primary.light
}))

const SessionFormFieldsStyled = styled(Box)(({theme}) => ({
    flex: 1,
    width: '350px'
}))

const SessionFormActionStyled = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
}))


interface CoachingSessionFormProps {
    session: ICoachingSession
}

const CoachingSessionForm: FC<CoachingSessionFormProps> = ({session}) => {

    const coachStore = useContext(CoachContext)

    const {
        control,
        resetField,
        formState: {
            errors,
            isDirty,
            isValid
        },

    } = useForm()

    useEffect(() => {
        resetField('dateTime', {defaultValue: session.dateTime})
        resetField('coachId', {defaultValue: session.coach.id})
    }, [])

    return (
        <SessionCardStyled>
            <Typography
                variant={'subtitle1'}
                color={'primary'}
                width={'150px'}
                textAlign={'center'}
            >
                {session.direction.title}
            </Typography>
            <form>
                <SessionFormStyled>
                    <SessionFormFieldsStyled>
                        <AppDateTimePickerController
                            label={'Дата и время'}
                            name={'dateTime'}
                            control={control}
                            errors={errors}
                            color={'primary'}
                        />
                        <AppTextFieldController
                            label={'Тренер'}
                            name={'coachId'}
                            control={control}
                            color={'primary'}
                            select={true}
                            options={coachStore?.data || []}
                            renderOption={option =>
                                <MenuItem
                                    key={`optionSessionCoachId_${option.id}`}
                                    value={option.id}
                                >
                                    {option.lastName} {option.firstName}
                                </MenuItem>
                            }
                        />
                    </SessionFormFieldsStyled>
                    <SessionFormActionStyled>
                        <AppIconButton
                            tooltipTitle={'Удалить'}
                            color={'secondary'}
                        >
                            <DeleteForeverIcon/>
                        </AppIconButton>
                        <AppIconButton
                            tooltipTitle={'Сохранить'}
                            color={'primary'}
                            disabled={!isValid || !isDirty}
                        >
                            <SaveIcon/>
                        </AppIconButton>
                    </SessionFormActionStyled>
                </SessionFormStyled>
            </form>
        </SessionCardStyled>
    );
};

export default CoachingSessionForm;