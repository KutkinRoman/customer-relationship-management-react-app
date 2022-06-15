import React, {FC} from 'react';
import {ICustomerRequest} from "../../../model/customer/CustomerRequest";
import {AppTable} from "../../UI/table/AppTable";
import {Link, TableCell, Typography} from "@mui/material";
import {createColorByEvent} from "../../../model/customer/CustomerRequestEvent";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";
import AppTableRow from "../../UI/table/AppTableRow";
import {Body, Caption} from "../../UI/typography/Typography";

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
                    <AppTableRow
                        key={`customerRequestTable_${request.id}`}
                        hover
                        tabIndex={-1}
                        onClick={() => handleClickTableRow(request)}
                    >
                        <TableCell>
                            <Typography
                                variant={'body2'}
                            >
                                {DateTimeUtils.toDDmmYYYYmmHH(request.createDateTime)}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Body>
                                {request.person.lastName}
                            </Body>
                            <Body>
                                {request.person.firstName}
                            </Body>
                            <Body>
                                {request.person.info.telephone}
                            </Body>
                            <Caption>
                                <Link
                                    component={'a'}
                                    href={request.person.info.pageLinkVk}
                                    target={'_blank'}
                                    color={'text.primary'}
                                >
                                    {request.person.info.pageLinkVk}
                                </Link>
                            </Caption>
                        </TableCell>
                        <TableCell>
                            <Body>
                                {request.coach?.compactName}
                            </Body>
                            <Body>
                                {request.coachingDirection?.title}
                            </Body>
                            <Body>
                                {DateTimeUtils.toDDmmYYYYmmHH(request.planDateTime)}
                            </Body>
                        </TableCell>
                        <TableCell>
                            <Body
                                sx={{color: createColorByEvent(request.currentStatus)}}
                            >
                                {request.currentStatus.title}
                            </Body>
                        </TableCell>
                        <TableCell
                            sx={{maxWidth: '200px'}}
                        >
                            <Caption>
                                {request.info}
                            </Caption>
                        </TableCell>
                        <TableCell>
                            <Caption>
                                {DateTimeUtils.toDDmmYYYYmmHH(request.callDateTime)}
                            </Caption>
                        </TableCell>
                    </AppTableRow>
                }
            />
        );
    };

export default CustomerRequestTable;