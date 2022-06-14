import React, {FC} from 'react';
import {AppTable} from "../../UI/table/AppTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AppIconButton from "../../UI/button/AppIconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {Avatar} from "@mui/material";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import UpOrDownMoneyView from "../../UI/money/UpOrDownMoneyView";
import BalanceView from "../../UI/money/BalanceView";
import {CoachFull} from "../../../model/coach/CoachFull";

interface CoachTableProps {
    coachList: CoachFull[],
    isLoading: boolean,
    handleNewTransaction: (coach: CoachFull) => void
}

const columns: string[] = [
    '',
    'ФИО тренера',
    'Зачислено',
    'Баланс',
    '',
    '',
]

const CoachTable: FC<CoachTableProps> = ({coachList, isLoading, handleNewTransaction}) => {
    return (
        <AppTable
            columns={columns}
            rows={coachList}
            isLoading={isLoading}
            maxSkeletonRows={12}
            renderRow={(coach) =>
                <TableRow
                    key={`coach_row_${coach.id}`}
                    hover
                    role={'checkbox'}
                    tabIndex={-1}
                >
                    <TableCell>
                        <Avatar>
                            {coach.firstName?.substring(0, 1)}
                        </Avatar>
                    </TableCell>
                    <TableCell>
                        {coach.fullName}
                    </TableCell>
                    <TableCell>
                        <UpOrDownMoneyView value={coach.sum}/>
                    </TableCell>
                    <TableCell>
                        <BalanceView value={coach.balance}/>
                    </TableCell>
                    <TableCell>
                        <AppIconButton
                            tooltipTitle={'Списать сумму'}
                            color={'success'}
                            disabled={coach.balance <= 0}
                            onClick={() => handleNewTransaction(coach)}
                        >
                            <PointOfSaleIcon/>
                        </AppIconButton>
                    </TableCell>
                    <TableCell>
                        <AppIconButton
                            tooltipTitle={'История'}
                            color={'info'}
                        >
                            <FormatListBulletedIcon/>
                        </AppIconButton>
                    </TableCell>
                </TableRow>
            }
        />
    );
};

export default CoachTable;