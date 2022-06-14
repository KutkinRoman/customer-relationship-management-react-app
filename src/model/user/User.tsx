import {UserRole} from "./UserRole";
import {makeAutoObservable} from "mobx";

export interface IUser {
    readonly username: string
    readonly roles: UserRole[]
}

export class User implements IUser {

    readonly username: string
    readonly roles: UserRole[]

    constructor(username: string, roles: UserRole[]) {
        this.username = username;
        this.roles = roles;
        makeAutoObservable(this)
    }

}