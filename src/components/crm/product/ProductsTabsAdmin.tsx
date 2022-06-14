import React, {FC} from 'react';
import ProductsTabs from "./ProductsTabs";
import ProductTableAdmin from "./ProductTableAdmin";
import {IProductCategory} from "../../../model/product/ProductCategory";
import {IProduct} from "../../../model/product/Product";

interface ProductsTabsAdminProps {
    categories: IProductCategory[]
    isLoading: boolean
    balancePlusByProduct: (product: IProduct, value: number) => void
    balanceMinusByProduct: (product: IProduct, value: number) => void
}

const ProductsTabsAdmin: FC<ProductsTabsAdminProps> = ({
                                                           categories,
                                                           isLoading,
                                                           balancePlusByProduct,
                                                           balanceMinusByProduct
                                                       }) => {
    return (
        <ProductsTabs
            categories={categories}
            isLoading={isLoading}
            renderTabPanel={(products =>
                <ProductTableAdmin
                    key={`productTableSimp_${Math.random()}`}
                    products={products}
                    balancePlusByProduct={balancePlusByProduct}
                    balanceMinusByProduct={balanceMinusByProduct}
                />)}
        />
    );
};

export default ProductsTabsAdmin;