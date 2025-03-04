export class CreateMatchReviewDto {
    constructor(partial: Partial<CreateMatchReviewDto>) {
        Object.assign(this, partial);
    }
}