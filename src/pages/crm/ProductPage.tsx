import React, {FC, useEffect, useState} from 'react';
import {Container} from "@mui/material";
import PageContentItem from "../../components/UI/page-content/PageContentItem";
import {observer} from "mobx-react-lite";
import {ProductStore} from "../../store/ProductStore";
import ProductsTabsAdmin from "../../components/crm/product/ProductsTabsAdmin";

const ProductPage: FC = observer(() => {

    const [productStore] = useState(() => new ProductStore())

    useEffect(() => {
        if (!productStore.isLoading) {
            productStore.fetch()
        }
    }, [])

    return (
        <Container
            sx={{minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1}}
        >
            <PageContentItem
                sx={{flex: 1, marginTop: '50px'}}
            >
                <ProductsTabsAdmin
                    categories={productStore.data || []}
                    isLoading={productStore.isLoading}
                    balancePlusByProduct={(product, value) => productStore.balancePlusByProduct(product, value)}
                    balanceMinusByProduct={(product, value) => productStore.balanceMinusByProduct(product, value)}
                />
            </PageContentItem>
        </Container>
    );
});

export default ProductPage;