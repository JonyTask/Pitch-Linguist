import { Exclude, Type } from 'class-transformer';
import { ClubDto } from 'src/application/club-cases/dto/club.dto';

export class LeagueRelatedDto {
    id: bigint
    league_name: string

    @Type(() => ClubDto)
    clubs: ClubDto[]

    @Exclude()
    created_at: Date

    constructor(partial: Partial<LeagueRelatedDto>) {
        Object.assign(this, partial);
    }
}