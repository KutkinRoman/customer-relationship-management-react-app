import React, {FC} from 'react';
import {AppTable} from "../../UI/table/AppTable";
import TableRow from "@mui/material/TableRow";
import {TableCell} from "@mui/material";
import ProductBalanceSpan from "./ProductBalanceSpan";
import ProductBalanceCalculationCell from "./ProductBalanceCalculationCell";
import AppIconButton from "../../UI/button/AppIconButton";
import EditIcon from '@mui/icons-material/Edit';
import {IProduct} from "../../../model/product/Product";

interface ProductTableAdminProps {
    products: IProduct[],
    balancePlusByProduct: (product: IProduct, value: number) => void
    balanceMinusByProduct: (product: IProduct, value: number) => void
}

const columns: string[] = [
    'Наименование',
    'Цена',
    'Баланс',
    '',
    ''
]

const ProductTableAdmin: FC<ProductTableAdminProps> = ({
                                                           products,
                                                           balancePlusByProduct,
                                                           balanceMinusByProduct
                                                       }) => {
    return (
        <AppTable
            columns={columns}
            rows={products}
            renderRow={(product) =>
                <TableRow
                    key={`productRowSimp_${product.id}`}
                    hover
                    tabIndex={-1}
                >
                    <TableCell>
                        {product.title}
                    </TableCell>
                    <TableCell>
                        {product.price}
                    </TableCell>
                    <TableCell>
                        <ProductBalanceSpan
                            product={product}
                        />
                    </TableCell>
                    <ProductBalanceCalculationCell
                        product={product}
                        balancePlusByProduct={balancePlusByProduct}
                        balanceMinusByProduct={balanceMinusByProduct}
                    />
                    <TableCell>
                        <AppIconButton
                            color={'info'}
                            tooltipTitle={`Редактировать ${product.title}`}
                        >
                            <EditIcon/>
                        </AppIconButton>
                    </TableCell>
                </TableRow>
            }
        />
    );
};

export default ProductTableAdmin;