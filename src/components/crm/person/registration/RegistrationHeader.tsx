import React, {FC} from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {PersonStore} from "../../../../store/person/PersonStore";
import {observer} from "mobx-react-lite";
import Skeleton from '@mui/material/Skeleton';
import AppButton from "../../../UI/button/AppButton";
import {useNavigate} from 'react-router-dom'
import AppButtonGroup from "../../../UI/button/AppButtonGroup";

interface RegistrationHeaderProps {
    personStore: PersonStore | undefined
}

const RegistrationHeader: FC<RegistrationHeaderProps> = observer(({personStore}) => {

    const navigate = useNavigate();

    return (
        <Box
            display={'flex'}
            padding={'5px'}
            alignItems={'center'}
        >
            <Box
                padding={'15px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {personStore?.isLoading &&
                    <Skeleton
                        variant={'circular'}
                        width={40}
                        height={40}
                    />
                }
                <Avatar>{personStore ? personStore.data?.firstName?.substr(0, 1) : '?'}</Avatar>
            </Box>
            <Box
                padding={'5px'}
            >
                <Typography
                    variant={'h5'}
                    color={'text.secondary'}
                >
                    {personStore?.data?.fullName}
                </Typography>
                {personStore?.data &&
                    <AppButtonGroup>
                        <AppButton
                            // onClick={() => navigate(`${AppPaths.personForm}/${personStore?.data?.id}`)}
                        >
                            Редактировать данные
                        </AppButton>
                    </AppButtonGroup>
                }
            </Box>
        </Box>
    );
});

export default RegistrationHeader;