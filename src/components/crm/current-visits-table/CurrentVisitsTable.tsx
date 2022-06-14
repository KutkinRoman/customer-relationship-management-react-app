import React, {FC} from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {VisitCurrent} from "../../../types/types";
import {observer} from "mobx-react-lite";
import DeleteIcon from '@mui/icons-material/Delete';
import ShopIcon from '@mui/icons-material/Shop';
import AppIconButton from "../../UI/button/AppIconButton";
import {AppTable} from "../../UI/table/AppTable";

const columns: string[] = [
    'Дата и время',
    'ФИО клиента',
    'Услуга',
    '',
    ''
]

interface CurrentVisitsTableProps {
    visits: VisitCurrent[]
    isLoading: boolean
}

const CurrentVisitsTable: FC<CurrentVisitsTableProps> = observer(
    ({
         visits,
         isLoading
     }) => {
        return (
            <AppTable
                isLoading={isLoading}
                columns={columns}
                rows={visits}
                maxSkeletonRows={8}
                renderRow={(visit) =>
                    <TableRow
                        key={`visit_${visit.visitId}_person_${visit.personId}`}
                        hover
                        role={'checkbox'}
                        tabIndex={-1}
                    >
                        <TableCell>
                            {visit.dateTime}
                        </TableCell>
                        <TableCell>
                            {visit.personName}
                        </TableCell>
                        <TableCell>
                            {visit.info}
                        </TableCell>
                        <TableCell>
                            <AppIconButton
                                tooltipTitle={'Новая покупка'}
                            >
                                <ShopIcon
                                    color={'info'}
                                    fontSize={'inherit'}
                                />
                            </AppIconButton>
                        </TableCell>
                        <TableCell>
                            <AppIconButton
                                tooltipTitle={'Удалить'}
                            >
                                <DeleteIcon
                                    color={'error'}
                                    fontSize={'inherit'}
                                />
                            </AppIconButton>
                        </TableCell>
                    </TableRow>
                }
            />
        );
    });

export default CurrentVisitsTable;