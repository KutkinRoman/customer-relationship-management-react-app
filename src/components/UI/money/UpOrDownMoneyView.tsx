import React, {FC} from 'react';
import {Box} from "@mui/material";
import {MoneyUtils} from "../../../utils/MoneyUtils";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

interface UpOrDownMoneyViewProps {
    value: number
}

const UpOrDownMoneyView: FC<UpOrDownMoneyViewProps> = ({value}) => {

    const getColor = () => {
        if (value === 0) {
            return 'text.primary'
        }
        return value > 0
            ? 'success.main'
            : 'error.main'
    }

    const getIcon = () => {
        if (value === 0) {
            return <CompareArrowsIcon sx={{opacity: '0'}}/>
        }
        return value > 0
            ? <ArrowDropUpIcon/>
            : <ArrowDropDownIcon/>
    }

    return (
        <Box
            color={getColor()}
            width={'100%'}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
        >
            {getIcon()}&nbsp;{MoneyUtils.parserRub(value)
            .split(' ')
            .map(str =>
                <span>{str}&nbsp;</span>
            )
        }&nbsp;&#8381;
        </Box>
    );
};

export default UpOrDownMoneyView;