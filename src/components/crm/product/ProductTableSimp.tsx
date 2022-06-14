import React, {FC} from 'react';
import {AppTable} from "../../UI/table/AppTable";
import {TableCell} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import ProductBalanceSpan from "./ProductBalanceSpan";
import {IProduct} from "../../../model/product/Product";

interface ProductTableSimpProps {
    products: IProduct[]
}

const columns: string[] = [
    'Наименование',
    'Цена',
    'Баланс',
]

const ProductTableSimp: FC<ProductTableSimpProps> = ({products}) => {
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
                </TableRow>
            }
        />
    );
};

export default ProductTableSimp;