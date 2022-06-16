import defaultBackgroundImage from '../../assect/images/background_image.jpg'

import {makeAutoObservable} from "mobx";

export class ImageStore {

    readonly keyLocalStorage = 'background_'
    readonly defaultBackgroundImage = defaultBackgroundImage
    backgroundImage?: any

    constructor() {
        this.backgroundImage = this.defaultBackgroundImage
        makeAutoObservable(this)
    }

    setBackgroundImage = (backgroundImage: any) => {
        this.backgroundImage = backgroundImage
    }

    saveBackgroundImageByUsernameId(username: string, backgroundImage: any) {
        localStorage.setItem(this.keyLocalStorage + username, backgroundImage)
    }

    updateBackgroundImageByUsernameId(username: string) {
        const image = localStorage.getItem(this.keyLocalStorage + username)
        if (image) {
            this.backgroundImage = image
        }
    }

}