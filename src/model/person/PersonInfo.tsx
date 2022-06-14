import {action, makeObservable, observable} from "mobx";

export interface IPersonInfo {
    personId: number;
    email: string | undefined;
    telephone: string | undefined;
    dateBirth: Date | undefined;
    description: string | undefined;
    vkontakteId: number | undefined;
    isOutMessage: boolean | undefined;
    pageLinkVk: string | undefined;
    dialogLinkVk: string | undefined;

    update: (personInfo: IPersonInfo) => void
}

export class PersonInfo implements IPersonInfo {
    personId: number;
    email: string | undefined;
    telephone: string | undefined;
    dateBirth: Date | undefined;
    description: string | undefined;
    vkontakteId: number | undefined;
    isOutMessage: boolean | undefined;
    pageLinkVk: string | undefined;
    dialogLinkVk: string | undefined;

    constructor(personInfo: IPersonInfo) {
        this.personId = personInfo.personId;
        this.email = personInfo.email;
        this.telephone = personInfo.telephone;
        this.dateBirth = personInfo.dateBirth;
        this.description = personInfo.description;
        this.vkontakteId = personInfo.vkontakteId;
        this.isOutMessage = personInfo.isOutMessage;
        this.pageLinkVk = personInfo.pageLinkVk;
        this.dialogLinkVk = personInfo.dialogLinkVk;
        makeObservable(this, {
            personId: observable,
            email: observable,
            telephone: observable,
            dateBirth: observable,
            description: observable,
            vkontakteId: observable,
            isOutMessage: observable,
            pageLinkVk: observable,
            dialogLinkVk: observable,
            update: action
        })
    }

    update(personInfo: IPersonInfo) {
        this.personId = personInfo.personId;
        this.email = personInfo.email;
        this.telephone = personInfo.telephone;
        this.dateBirth = personInfo.dateBirth;
        this.description = personInfo.description;
        this.vkontakteId = personInfo.vkontakteId;
        this.isOutMessage = personInfo.isOutMessage;
        this.pageLinkVk = personInfo.pageLinkVk;
        this.dialogLinkVk = personInfo.dialogLinkVk;
    }

}