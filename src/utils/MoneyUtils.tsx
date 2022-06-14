export class MoneyUtils {

    public static parserRub(value: number): string {
        return parseFloat(value.toString())
            .toFixed(2)
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

}