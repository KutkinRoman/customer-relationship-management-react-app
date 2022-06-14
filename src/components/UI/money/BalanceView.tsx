import React, {FC} from 'react';
import {MoneyUtils} from "../../../utils/MoneyUtils";
import {Box} from "@mui/material";

interface BalanceViewProps {
    value: number
}

const BalanceView: FC<BalanceViewProps> = ({value}) => {

    const getColor = () => {
        return value > 0
            ? 'success.main'
            : 'error.main'
    }

    return (
        <Box
            color={getColor()}
        >
            {MoneyUtils.parserRub(value)}&nbsp;&#8381;
        </Box>
    );
};

export default BalanceView;