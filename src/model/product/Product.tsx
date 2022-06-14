import {ProductDiscriminator} from "./ProductCategory";
import {makeAutoObservable} from "mobx";

export interface IProduct {
    id: number;
    discriminator: ProductDiscriminator;
    title: string;
    price: number;
    inventory: boolean;
    balance: number;
    isLoadingBalance: boolean;

    setBalance(balance: number): void

    setIsLoadingBalance(isLoading: boolean): void
}

export class Product implements IProduct {

    id: number;
    discriminator: ProductDiscriminator;
    title: string;
    price: number;
    inventory: boolean;
    balance: number;
    isLoadingBalance: boolean;

    constructor(product: IProduct) {
        this.id = product.id;
        this.discriminator = product.discriminator;
        this.title = product.title;
        this.price = product.price;
        this.inventory = product.inventory;
        this.balance = product.balance;
        this.isLoadingBalance = false
        makeAutoObservable(this)
    }

    setBalance(balance: number): void {
        this.balance = balance
    }

    setIsLoadingBalance(isLoading: boolean) {
        this.isLoadingBalance = isLoading
    }

}