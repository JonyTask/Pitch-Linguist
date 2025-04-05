import { Exclude } from "class-transformer";

export class StockDto {
    constructor(partial: Partial<StockDto>) {
        Object.assign(this, partial);
    }
}