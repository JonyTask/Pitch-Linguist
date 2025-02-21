import { Controller, Get, Logger, Param, Query } from "@nestjs/common";
import { ClubService } from "./club.service";
import { LeagueType } from "src/infrastructure/types/league.type";

@Controller('club')
export class ClubController {
    constructor(private clubService: ClubService) { }
    
    @Get('listup')
    listup() {
        return this.clubService.listUpAllClubs();
    }

    @Get(':league')
    fetchClubsByLeague(@Param('league') league: LeagueType) {
        return this.clubService.fetchClubsByLeague(league);
    }

    @Get('search/query')
    searchClub(@Query('club_name') club_name: string) {
        return this.clubService.searchClub(club_name);
    }
}