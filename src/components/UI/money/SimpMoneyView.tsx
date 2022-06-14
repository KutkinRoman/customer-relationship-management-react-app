import React, {FC} from 'react';
import {MoneyUtils} from "../../../utils/MoneyUtils";

interface SimpMoneyViewProps {
    value: number
}

const SimpMoneyView: FC<SimpMoneyViewProps> = ({value}) => {
    return (
        <span>
            {MoneyUtils.parserRub(value)}&nbsp;&#8381;
        </span>
    );
};

export default SimpMoneyView;