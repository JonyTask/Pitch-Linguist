import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/domain/prisma/prisma.service";
import { Club } from '@prisma/client';

@Injectable({})
export class ClubService {
    constructor(private readonly prisma: PrismaService) {}

    async listUpAllClubs(){
        try {
            const clubs = await this.prisma.club.findMany();
            // BigInt を文字列に変換してから返す
            return JSON.parse(JSON.stringify(clubs, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            ));
        } catch (error) {
            console.error('Error fetching clubs:', error);
            throw error;
        }
    }
}