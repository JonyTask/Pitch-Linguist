import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { LeagueType, NumEachLeague } from "src/infrastructure/types/league.type";
import { ClubDto } from "./dto/club.dto";
import { plainToInstance } from "class-transformer";
import { ClubFavoriteDto } from "./dto/club.favorite.dto";

@Injectable({})
export class ClubService {
    constructor(private readonly prisma: PrismaService) { }

    async listUpAllClubs() {
        try {
            const clubs = await this.prisma.club.findMany();
            const dtoClubs = clubs.map(club => plainToInstance(ClubDto, club));

            return dtoClubs;
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }

    async fetchClubsByLeague(league: LeagueType) {
        try {
            const leagueNum: number = NumEachLeague[`${league}`];
            if (leagueNum === undefined || leagueNum === null) {
                throw new Error(`League number not found for ${league}`);
            }
            const clubs = await this.prisma.club.findMany({
                where: {
                    league_id: leagueNum
                }
            });
            const dtoClubs = clubs.map(club => plainToInstance(ClubDto, club));
            return dtoClubs;
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }

    async searchClub(query: string) {
        try {
            const search_clubs = await this.prisma.club.findMany({
                where: {
                    club_name: {
                        contains: query,
                    }
                }
            });
            const dtoClubs = search_clubs.map(club => plainToInstance(ClubDto, club));
            return dtoClubs;
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }

    async addFavoriteClub(ClubFavoriteDto: ClubFavoriteDto) {
        try {
            return await this.prisma.favoritesClub.create({
                data: {
                    user: { connect: { id: ClubFavoriteDto.user_id } },
                    club: { connect: { id: ClubFavoriteDto.club_id } },
                }
            });
        } catch (error) {
            console.error('add Favorite club:', error);
            throw error;
        }
    }
}