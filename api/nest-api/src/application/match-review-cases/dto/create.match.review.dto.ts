export class CreateMatchReviewDto {
    home_team_id: bigint
    away_team_id: bigint
    match_date: Date
    kick_off_at: Date
    match_review_text?: string
    highlight_url?: string

    constructor(partial: Partial<CreateMatchReviewDto>) {
        Object.assign(this, partial);
    }
}