import React, {FC} from 'react';
import {Box, LinearProgress, Tab, Tabs} from "@mui/material";
import {IProductCategory} from "../../../model/product/ProductCategory";
import {IProduct} from "../../../model/product/Product";

interface ProductsTabsProps {
    categories: IProductCategory[]
    isLoading: boolean
    renderTabPanel: (products: IProduct[]) => React.ReactNode
}

function a11yProps(index: number) {
    return {
        id: `product-tab-${index}`,
        'aria-controls': `product-tabpanel-${index}`,
    };
}

const ProductsTabs: FC<ProductsTabsProps> = ({categories, isLoading, renderTabPanel}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            {isLoading &&
                <Box
                    sx={{margin: '25px'}}
                >
                    <LinearProgress
                        color={'secondary'}
                    />
                </Box>
            }
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label={'basic tabs example"'}
                    textColor={'secondary'}
                    indicatorColor={'secondary'}
                    variant={'fullWidth'}
                >
                    {categories.map((category, index, array) =>
                        <Tab
                            key={`tabCategory_${category.id}`}
                            label={category.title}
                            {...a11yProps(index)}
                        />
                    )}
                </Tabs>
            </Box>
            {categories.map((category, index, array) =>
                <Box
                    key={`tabPanelCategory_${category.id}`}
                    role={'tabpanel'}
                    hidden={value !== index}
                    id={`product-tabpanel-${index}`}
                    aria-labelledby={`product-tab-${index}`}
                >
                    {value === index && renderTabPanel(category.products)}
                </Box>
            )}
        </Box>
    );
};

export default ProductsTabs;