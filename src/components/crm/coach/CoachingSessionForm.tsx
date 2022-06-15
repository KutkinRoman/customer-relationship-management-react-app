import React, {FC, useContext, useEffect, useState} from 'react';
import {ICoachingSession} from "../../../model/coach/CoachingSession";
import {useForm} from "react-hook-form";
import AppDateTimePickerController from "../../UI/form/AppDateTimePickerController";
import AppTextFieldController from "../../UI/form/AppTextFiledController";
import {Box, Card, CircularProgress, MenuItem, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {CoachContext} from "../../../context/CoachContext";
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AppIconButton from "../../UI/button/AppIconButton";
import {CoachingService} from "../../../service/CoachingService";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";

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
    const [isLoading, setIsLoading] = useState(false)

    const {
        control,
        resetField,
        formState: {
            errors,
            isDirty,
            isValid
        },
        handleSubmit
    } = useForm()

    useEffect(() => {
        resetField('dateTime', {defaultValue: session.dateTime})

        resetField('directionId', {defaultValue: session.direction.id})
        if (session.coach) {
            resetField('coachId', {defaultValue: session.coach.id})
        }
    }, [])

    const onSubmit = async (data: any) => {
        data.dateTime = DateTimeUtils.toISODateTimeString(data.dateTime)
        data.directionId = session.direction.id
        setIsLoading(true)
        try {
            if (session.id) {
                await CoachingService.updateSession(session.id, data)
            } else {
                await CoachingService.createNewSession(data)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <SessionCardStyled>
            <Typography
                variant={'subtitle1'}
                color={'primary'}
                width={'150px'}
                textAlign={'center'}
            >
                {session?.direction.title}
            </Typography>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
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
                        {isLoading
                            ?
                            <CircularProgress
                                color={'primary'}
                            />
                            :
                            <React.Fragment>
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
                                    submit={true}
                                >
                                    <SaveIcon/>
                                </AppIconButton>
                            </React.Fragment>
                        }
                    </SessionFormActionStyled>
                </SessionFormStyled>
            </form>
        </SessionCardStyled>
    );
};

export default CoachingSessionForm;