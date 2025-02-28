import { Exclude } from 'class-transformer';

export class LeagueDto {
    id: bigint
    league_name: string

    @Exclude()
    created_at: Date

    constructor(partial: Partial<LeagueDto>) {
        Object.assign(this, partial);
    }
}