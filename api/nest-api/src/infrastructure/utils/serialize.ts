export class SerializeBigInt {
    public static serialize<T>(input: T): T {
        return JSON.parse(JSON.stringify(input, this.replacer));
    }

    private static replacer(key: string, value: any): any {
        if (typeof value === 'bigint') {
            return value.toString();
        }
        return value;
    }
}