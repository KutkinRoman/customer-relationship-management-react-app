import {AUTH_API} from "./api";
import {IProductCategory, ProductInventoryOperation} from "../model/product/ProductCategory";
import {IProduct} from "../model/product/Product";

export class ProductService {

    public static async getProductsByCategory() {
        return await AUTH_API.get<IProductCategory[]>('/api/v1/products/categories')
    }

    public static async productBalanceCalculation(productId: number, operation: ProductInventoryOperation, value: number) {
        return await AUTH_API.put<IProduct>(`/api/v1/products/${productId}/balance`, {}, {
            params: {
                operation,
                value
            }
        })
    }

}