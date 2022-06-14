import React, {FC} from 'react';
import {CashBook} from "../../../types/types";
import {Box, List, ListItem, Skeleton, Typography} from "@mui/material";
import AppButton from "../../UI/button/AppButton";
import SimpMoneyView from "../../UI/money/SimpMoneyView";

interface CashBookPanelItemProps {
    title: string
    value: number
    isLoading: boolean,
    color: string
}

const CashBookPanelItem: FC<CashBookPanelItemProps> =
    ({
         title,
         value,
         isLoading,
         color
     }) => {
        return (
            <ListItem>
                <Box
                    sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}
                >
                    <Typography
                        variant={'body1'}
                        color={color}
                    >
                        {title}
                    </Typography
                    >
                    <Typography
                        variant={'body1'}
                        color={color}
                    >
                        {isLoading
                            ? <Skeleton sx={{minWidth: '100px', bgcolor: color}}/>
                            : <SimpMoneyView value={value}/>
                        }
                    </Typography>
                </Box>
            </ListItem>
        )
    }

interface CashBookPanelProps {
    cashBook: CashBook | null,
    isLoading: boolean
}

const CashBookPanel: FC<CashBookPanelProps> = ({cashBook, isLoading}) => {
    return (
        <List>
            <CashBookPanelItem
                title={'Зачислено безналично'}
                value={cashBook?.nonCashSumCreditTotal || 0}
                isLoading={isLoading}
                color={'text.primary'}
            />
            <CashBookPanelItem
                title={'Зачислено наличными'}
                value={cashBook?.cashSumCreditTotal || 0}
                isLoading={isLoading}
                color={'text.primary'}
            />
            <CashBookPanelItem
                title={'Общая сумма зачисления'}
                value={cashBook?.sumCreditTotal || 0}
                isLoading={isLoading}
                color={'success.main'}
            />
            <CashBookPanelItem
                title={'Остаток в кассе'}
                value={cashBook?.cashSumEnd || 0}
                isLoading={isLoading}
                color={'warning.main'}
            />
            <ListItem>
                <AppButton
                    variant={'contained'}
                    color={'primary'}
                    fullWidth={true}
                    tooltipTitle={'Закрытие операционного дня'}
                >
                    ЗАКРЫТИЕ
                </AppButton>
            </ListItem>
            <ListItem>
                <AppButton
                    variant={'contained'}
                    color={'primary'}
                    fullWidth={true}
                    tooltipTitle={'Провести прочую операцию'}
                >
                    ПРОЧАЯ ОПЕРАЦИЯ
                </AppButton>
            </ListItem>
        </List>
    );
};

export default CashBookPanel;