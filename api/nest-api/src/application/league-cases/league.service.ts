import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { LeagueDto } from "./dto/league.dto";
import { LeagueRelatedDto } from "./dto/league.related.dto";

@Injectable({})
export class LeagueService {
    constructor(private readonly prisma: PrismaService) { }

    async listupAllLeagues() {
        try {
            const leagues = await this.prisma.league.findMany();
            const dtoLeagues = leagues.map(league => plainToInstance(LeagueDto, league));
            return dtoLeagues;
        } catch (error) {
            console.error('Error fetching leagues:', error);
            throw error;
        }
    }

    async relatedClubs() {
        try {
            const relatedClubs = await this.prisma.league.findMany({
                include: {
                    clubs: true,
                },
            });
            const dtoRelatedClubs = plainToInstance(LeagueRelatedDto, relatedClubs)
            return dtoRelatedClubs;
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }
}