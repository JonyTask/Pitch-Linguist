export class ClubFavoriteDto {
    id?: bigint
    user_id: number
    club_id: number
    created_at?: Date

    constructor(partial: Partial<ClubFavoriteDto>) {
        Object.assign(this, partial);
    }
}