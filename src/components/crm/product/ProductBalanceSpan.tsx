import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";
import {IProduct} from "../../../model/product/Product";
import {observer} from "mobx-react-lite";

interface ProductBalanceCellProps {
    product: IProduct
}

const ProductBalanceSpan: FC<ProductBalanceCellProps> = observer(({product}) => {

    const getColor = () => {
        if (!product.inventory) {
            return 'text.primary'
        }
        if (product.balance <= 0) {
            return 'error.main'
        }
        if (product.balance <= 10) {
            return 'warning.main'
        }
        return 'success.main'
    }

    return (
        <Box
            color={getColor()}
        >
            {product.inventory
                ? product.isLoadingBalance
                    ? <CircularProgress size={20} color={'secondary'}/>
                    : product.balance
                : '-'
            }
        </Box>
    );
});

export default ProductBalanceSpan;