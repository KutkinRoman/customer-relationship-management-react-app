import {action, makeObservable, observable} from "mobx";

export interface IPage<T> {
    empty: boolean;
    first: boolean;
    last: boolean;
    page: number;
    size: number;
    totalPages: number;
    content: T[] | undefined
}

export class Page<T> implements IPage<T> {
    empty: boolean;
    first: boolean;
    last: boolean;
    page: number;
    size: number;
    totalPages: number;
    content: T[]  | undefined

    constructor() {
        this.empty = true;
        this.first = false;
        this.last = false;
        this.page = 1;
        this.size = 0;
        this.totalPages = 0;
        makeObservable(this, {
            empty: observable,
            setEmpty: action,
            first: observable,
            setFirst: action,
            last: observable,
            setLast: action,
            page: observable,
            setPage: action,
            size: observable,
            setSize: action,
            totalPages: observable,
            setTotalPages: action,
            content: observable,
            setContent: action,
        })
    }

    update(page: IPage<T>){
        this.setEmpty(page.empty)
        this.setFirst(page.first)
        this.setLast(page.last)
        this.setPage(page.page)
        this.setSize(page.size)
        this.setTotalPages(page.totalPages)
    }

    setEmpty(value: boolean) {
        this.empty = value;
    }

    setFirst(value: boolean) {
        this.first = value;
    }

    setLast(value: boolean) {
        this.last = value;
    }

    setPage(value: number) {
        this.page = value;
    }

    setSize(value: number) {
        this.size = value;
    }

    setTotalPages(value: number) {
        this.totalPages = value;
    }

    setContent(value: T[]) {
        this.content = value;
    }
}