import React, {FC} from 'react';
import {ICustomerRequest} from "../../../model/customer/CustomerRequest";
import {AppTable} from "../../UI/table/AppTable";
import TableRow from "@mui/material/TableRow";
import {Link, TableCell, Typography} from "@mui/material";
import {createColorByEvent} from "../../../model/customer/CustomerRequestEvent";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";

interface CustomerRequestTableProps {
    requests: ICustomerRequest[]
    isLoading: boolean
    handleClickTableRow: (customerRequest: ICustomerRequest) => void
}

const columns: string[] = [
    'Дата заявки',
    'Клиент',
    'Тренировка',
    'Текущий статус',
    'Доп инфо',
    'Дата звонка'
]

const CustomerRequestTable: FC<CustomerRequestTableProps> =
    ({
         requests,
         isLoading,
         handleClickTableRow
     }) => {
        return (
            <AppTable
                columns={columns}
                rows={requests}
                isLoading={isLoading}
                maxSkeletonRows={8}
                renderRow={request =>
                    <TableRow
                        key={`customerRequestTable_${request.id}`}
                        hover
                        tabIndex={-1}
                        onClick={() => handleClickTableRow(request)}
                    >
                        <TableCell>
                            {DateTimeUtils.toDDmmYYYYmmHH(request.createDateTime)}
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant={'body2'}
                            >
                                {request.person.lastName}
                            </Typography>
                            <Typography
                                variant={'body2'}
                            >
                                {request.person.firstName}
                            </Typography>
                            <Typography
                                variant={'body2'}
                            >
                                {request.person.info.telephone}
                            </Typography>
                            <Typography
                                variant={'body2'}
                            >
                                <Link
                                    component={'a'}
                                    href={request.person.info.pageLinkVk}
                                    target={'_blank'}
                                    color={'text.primary'}
                                >
                                    {request.person.info.pageLinkVk}
                                </Link>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant={'body2'}
                            >
                                {request.coach?.compactName}
                            </Typography>
                            <Typography
                                variant={'body2'}
                            >
                                {request.coachingDirection?.title}
                            </Typography>
                            <Typography
                                variant={'body2'}
                            >
                                {DateTimeUtils.toDDmmYYYYmmHH(request.planDateTime)}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant={'body1'}
                                sx={{color: createColorByEvent(request.currentStatus)}}
                            >
                                {request.currentStatus.title}
                            </Typography>
                        </TableCell>
                        <TableCell
                            sx={{maxWidth: '200px'}}
                        >
                            <Typography
                                variant={'caption'}
                            >
                                {request.info}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant={'caption'}
                            >
                                {DateTimeUtils.toDDmmYYYYmmHH(request.callDateTime)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                }
            />
        );
    };

export default CustomerRequestTable;