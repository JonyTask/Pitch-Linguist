import { Exclude, Type } from "class-transformer"
import { ClubDto } from "src/application/club-cases/dto/club.dto"
import { UserDto } from "src/application/user-cases/dto/user.dto"

export class MatchReviewDto {
    id: bigint

    @Type(() => UserDto)
    reviewer: UserDto

    @Type(() => ClubDto)
    home_team: ClubDto

    @Type(() => ClubDto)
    away_team: ClubDto

    match_date: Date
    kick_off_at: Date
    match_review_text?: string
    highlight_url?: string
    status: number

    @Exclude()
    reviewer_id: number

    @Exclude()
    home_team_id: number

    @Exclude()
    away_team_id: number

    @Exclude()
    updated_at: Date
    
    @Exclude()
    created_at: Date

    @Exclude()
    deleted_at: Date

    constructor(partial: Partial<MatchReviewDto>) {
        Object.assign(this, partial);
    }
}