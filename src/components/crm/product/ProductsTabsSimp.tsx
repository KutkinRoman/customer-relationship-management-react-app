import React, {FC} from 'react';
import ProductsTabs from "./ProductsTabs";
import ProductTableSimp from "./ProductTableSimp";
import {IProductCategory} from "../../../model/product/ProductCategory";

interface ProductsTabsSimpProps {
    categories: IProductCategory[]
    isLoading: boolean
}

const ProductsTabsSimp: FC<ProductsTabsSimpProps> = ({categories, isLoading}) => {
    return (
        <ProductsTabs
            categories={categories}
            isLoading={isLoading}
            renderTabPanel={(products =>
                <ProductTableSimp
                    key={`productTableSimp_${Math.random()}`}
                    products={products}
                />)}
        />
    );
};

export default ProductsTabsSimp;