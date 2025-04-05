import { Exclude } from "class-transformer";

export class LikeDto {
    id: bigint
    stamper_id: bigint
    match_review_id: bigint

    @Exclude()
    created_at: Date

    @Exclude()
    deleted_at: Date

    constructor(partial: Partial<LikeDto>) {
        Object.assign(this, partial);
    }
}