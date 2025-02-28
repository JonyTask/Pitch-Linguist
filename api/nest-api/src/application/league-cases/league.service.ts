import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/domain/prisma/prisma.service";
import { LeagueDto } from "./dto/league.dto";
import { SerializeBigInt } from "src/infrastructure/utils/serialize";

@Injectable({})
export class LeagueService {
    constructor(private readonly prisma: PrismaService) { }

    async listupAllLeagues() {
        try {
            const leagues = await this.prisma.league.findMany();
            const dtoLeagues = leagues.map(league => plainToInstance(LeagueDto, league));
            return SerializeBigInt.serialize(dtoLeagues);
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }
}