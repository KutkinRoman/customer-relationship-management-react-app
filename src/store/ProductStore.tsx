import {FetchDataStore} from "./FetchDataStore";
import {ProductService} from "../service/ProductService";
import {ProductCategory, ProductInventoryOperation} from "../model/product/ProductCategory";
import {IProduct} from "../model/product/Product";

export class ProductStore extends FetchDataStore<ProductCategory[]> {

    constructor() {
        super([], ProductService.getProductsByCategory);
    }

    setData(value: ProductCategory[] | null) {
        super.setData(value?.map(category => new ProductCategory(category)) || []);
    }

    public balancePlusByProduct(product: IProduct, value: number) {
        this.balanceCalculationByProduct(product, ProductInventoryOperation.PLUS, value)
    }

    public balanceMinusByProduct(product: IProduct, value: number) {
        this.balanceCalculationByProduct(product, ProductInventoryOperation.MINUS, value)
    }

    private async balanceCalculationByProduct(product: IProduct, operation: ProductInventoryOperation, value: number) {
        product.setIsLoadingBalance(true)
        try {
            const response = await ProductService.productBalanceCalculation(product.id, operation, value)
            product.setBalance(response.data.balance)
        } catch (e) {

        } finally {
            product.setIsLoadingBalance(false)
        }
    }


}