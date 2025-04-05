import { Exclude } from "class-transformer";

export class LikeDto {
    constructor(partial: Partial<LikeDto>) {
        Object.assign(this, partial);
    }
}