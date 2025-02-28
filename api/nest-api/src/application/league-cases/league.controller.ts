import { Controller, Get } from "@nestjs/common";
import { LeagueService } from "./league.service";

@Controller('league')
export class LeagueController {
    constructor (private leagueService: LeagueService) {}

    @Get('listup')
    listup() {
        return this.leagueService.listupAllLeagues();
    }
}