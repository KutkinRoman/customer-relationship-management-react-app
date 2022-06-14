import React, {FC, useEffect, useState} from 'react';
import {Box, TableCell, TextField} from "@mui/material";
import AppIconButton from "../../UI/button/AppIconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {IProduct} from "../../../model/product/Product";
import {observer} from "mobx-react-lite";

interface ProductBalanceCalculationCellProps {
    product: IProduct
    balancePlusByProduct: (product: IProduct, value: number) => void
    balanceMinusByProduct: (product: IProduct, value: number) => void
}

const ProductBalanceCalculationCell: FC<ProductBalanceCalculationCellProps> = observer(
    ({
         product,
         balancePlusByProduct,
         balanceMinusByProduct
     }) => {

        const [value, setValue] = useState(1);

        const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(parseInt(e.target.value))
        }

        const handleBalancePlusByProduct = () => {
            balancePlusByProduct(product, value)
        }

        const handleBalanceMinusByProduct = () => {
            balanceMinusByProduct(product, value)
        }

        useEffect(() => {
            if (!product.isLoadingBalance) {
                setValue(1)
            }
        }, [product.isLoadingBalance])

        return (
            <TableCell>
                {product.inventory &&
                    <Box>
                        <AppIconButton
                            color={'error'}
                            onClick={handleBalanceMinusByProduct}
                            tooltipTitle={`Убрать ${value} шт.`}
                            disabled={product.isLoadingBalance}
                        >
                            <RemoveIcon/>
                        </AppIconButton>
                        <TextField
                            size={'small'}
                            type={'number'}
                            value={value}
                            onChange={handleOnChange}
                            sx={{maxWidth: '75px'}}
                            disabled={product.isLoadingBalance}
                            InputProps={{
                                style: {
                                    borderRadius: '16px',
                                    textAlign: 'center'
                                }
                            }}
                        />
                        <AppIconButton
                            color={'success'}
                            onClick={handleBalancePlusByProduct}
                            tooltipTitle={`Добавить ${value} шт.`}
                            disabled={product.isLoadingBalance}
                        >
                            <AddIcon/>
                        </AppIconButton>
                    </Box>
                }
            </TableCell>
        );
    });

export default ProductBalanceCalculationCell;