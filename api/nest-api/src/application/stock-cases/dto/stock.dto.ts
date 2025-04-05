import { Exclude } from "class-transformer";

export class StockDto {
    id: bigint
    stocker_id: bigint
    match_review_id: bigint

    @Exclude()
    created_at: Date

    @Exclude()
    deleted_at: Date

    constructor(partial: Partial<StockDto>) {
        Object.assign(this, partial);
    }
}