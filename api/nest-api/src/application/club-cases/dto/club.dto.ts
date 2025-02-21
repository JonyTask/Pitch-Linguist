import { Exclude } from 'class-transformer';

export class ClubDto {
    id: bigint
    club_name: string

    @Exclude()
    league_id: bigint

    @Exclude()
    updated_at: Date

    @Exclude()
    created_at: Date

    constructor(partial: Partial<ClubDto>) {
        Object.assign(this, partial);
    }
}