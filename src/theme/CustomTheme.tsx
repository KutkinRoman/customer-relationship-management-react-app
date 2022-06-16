import {Theme} from "@mui/material";
import {ICustomPalette, ICustomTheme} from "./types";
import {makeAutoObservable} from "mobx";
import {ThemeUtils} from "../utils/themeUtils";
import {UserPalette} from "./UserPalette";

class CustomTheme implements ICustomTheme {
    readonly keyLocalStorage = 'theme_palette_'
    theme: Theme;
    palette: ICustomPalette
    userPalette?: ICustomPalette
    isUpdate: boolean
    isLoading: boolean
    isUserTheme: boolean

    constructor() {
        this.palette = ThemeUtils.lightPalette()
        this.theme = ThemeUtils.createTheme(this.palette)
        this.isUpdate = false
        this.isLoading = false
        this.isUserTheme = false
        makeAutoObservable(this)
    }

    lightTheme() {
        this.palette = ThemeUtils.lightPalette()
        this.theme = ThemeUtils.createTheme(this.palette)
    }

    darkTheme() {
        this.palette = ThemeUtils.darkPalette()
        this.theme = ThemeUtils.createTheme(this.palette)
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
        // this.isLoading = true
        // this.isUpdate = false
    }

    saveCurrentPaletteByUsernameId(username: string) {
        localStorage.setItem(this.keyLocalStorage + username, JSON.stringify(this.palette))
        this.isUpdate = false
        this.isUserTheme = true
    }

    updatePaletteByUsernameId(username: string) {
        const palette = localStorage.getItem(this.keyLocalStorage + username)
        if (palette) {
            this.userPalette = new UserPalette(JSON.parse(palette))
            this.palette = this.userPalette
            this.theme = ThemeUtils.createTheme(this.palette)
            this.isUserTheme = true
        }
    }

    updateUserPalette() {
        if (this.userPalette) {
            this.palette = this.userPalette
            this.theme = ThemeUtils.createTheme(this.palette)
        }
    }

    deletePaletteByUsername(username: string): void {
        localStorage.removeItem(this.keyLocalStorage + username)
        if (this.isUserTheme) {
            this.resetTheme()
            this.userPalette = undefined
        }
    }

    resetTheme() {
        if (this.palette.mode === 'dark') {
            this.darkTheme()
        } else {
            this.lightTheme()
        }
        this.isUpdate = false
    }

    private compareAndConvertPalettes(src: ICustomPalette, target: ICustomPalette) {

    }

}

export {
    CustomTheme
}


