import {IProduct, Product} from "./Product";
import {makeAutoObservable} from "mobx";

export enum ProductInventoryOperation {
    PLUS = 'PLUS',
    MINUS = 'MINUS'
}

export enum ProductDiscriminator {
    PRODUCT = 'PRODUCT',
    SUBSCRIPTION = 'SUBSCRIPTION',
    CLUB_CARD = 'CLUB_CARD',
    COACHING = 'COACHING',
    SOLARIUM = 'SOLARIUM'
}

export interface IProductCategory {
    id: number;
    discriminator: ProductDiscriminator;
    title: string;
    products: IProduct[]
}

export class ProductCategory implements IProductCategory {

    id: number;
    discriminator: ProductDiscriminator;
    title: string;
    products: Product[];

    constructor(productCategory: IProductCategory) {
        this.id = productCategory.id;
        this.discriminator = productCategory.discriminator;
        this.title = productCategory.title;
        this.products = productCategory.products.map(product => new Product(product));
        makeAutoObservable(this)
    }

}