import {Theme} from "@mui/material";
import {ICustomPalette, ICustomTheme} from "./types";
import {makeAutoObservable} from "mobx";
import {ThemeUtils} from "../utils/themeUtils";

class CustomTheme implements ICustomTheme {
    theme: Theme;
    palette: ICustomPalette
    isUpdate: boolean
    isLoading: boolean

    constructor() {
        this.palette = ThemeUtils.lightPalette()
        this.theme = ThemeUtils.createTheme(this.palette)
        this.isUpdate = false
        this.isLoading = false
        makeAutoObservable(this)
    }

    lightTheme() {
        this.palette = ThemeUtils.lightPalette()
        this.update()
    }

    darkTheme() {
        this.palette = ThemeUtils.darkPalette()
        this.update()
    }

    update() {
        this.theme = ThemeUtils.createTheme(this.palette)
        this.isUpdate = true
    }

    changeTheme() {
        if (this.theme.palette.mode === 'dark') {
            this.lightTheme()
        } else {
            this.darkTheme()
        }
    }

    save() {
        this.isLoading = true
    }

}

export {
    CustomTheme
}


