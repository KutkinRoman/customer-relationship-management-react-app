import React, {FC} from 'react';
import {CashTransaction, EntityStatus} from "../../../types/types";
import {AppTable} from "../../UI/table/AppTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AppIconButton from "../../UI/button/AppIconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import UpOrDownMoneyView from "../../UI/money/UpOrDownMoneyView";

interface CashBookTableProps {
    transactions: CashTransaction[] | undefined,
    isLoading: boolean
}

const columns: string[] = [
    '#',
    'Дата и время',
    'Сумма',
    'Вид операции',
    'Описание',
    ''
]

const CashBookTable: FC<CashBookTableProps> = ({transactions, isLoading}) => {

    return (
        <AppTable
            columns={columns}
            rows={transactions || []}
            isLoading={isLoading}
            maxSkeletonRows={8}
            renderRow={(transaction) =>
                <TableRow
                    key={`cashTransaction_${transaction.id}`}
                    hover
                    role={'checkbox'}
                    tabIndex={-1}
                >
                    <TableCell
                        sx={{}}
                    >
                        {transaction.id}
                    </TableCell>
                    <TableCell
                        sx={{color: transaction.status === EntityStatus.DELETE ? 'error.light' : ''}}
                    >
                        {transaction.dateTime}
                    </TableCell>
                    <TableCell>
                        <UpOrDownMoneyView
                            value={transaction.sum}
                        />
                    </TableCell>
                    <TableCell
                        sx={{color: transaction.status === EntityStatus.DELETE ? 'error.light' : ''}}
                    >
                        {transaction.info}
                    </TableCell>
                    <TableCell
                        sx={{color: transaction.status === EntityStatus.DELETE ? 'error.light' : ''}}
                    >
                        {transaction.description}
                    </TableCell>
                    <TableCell>
                        <AppIconButton
                            tooltipTitle={'Удалить'}
                            disabled={transaction.status === EntityStatus.DELETE}
                        >
                            <DeleteIcon
                                color={transaction.status === EntityStatus.DELETE ? 'inherit' : 'error'}
                                fontSize={'inherit'}
                            />
                        </AppIconButton>
                    </TableCell>
                </TableRow>
            }
        />

    );
};

export default CashBookTable;