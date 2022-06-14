import {UseFormRegister} from "react-hook-form/dist/types/form";

export class Valid {

    public static requiredMinMaxLength(register: UseFormRegister<any>, name: string, min: number, max: number): void {
        register(
            name,
            {
                ...Valid.required(),
                ...Valid.minLength(min),
                ...Valid.maxLength(max),
            }
        )
    }


    public static required() {
        return {
            required: 'Поле обязательно к заполнению'
        }
    }

    public static minLength(val: number) {
        return {
            minLength: {
                value: val,
                message: `Минимально ${val} сим.`
            }
        }
    }

    public static maxLength(val: number) {
        return {
            maxLength: {
                value: val,
                message: `Максимально ${val} сим.`
            }
        }
    }

    public static patternEmail() {
        return {
            pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'E-mail указан некорректно'
            }
        }
    }
}
