import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/domain/prisma/prisma.service";
import { CreateMatchReviewDto } from "./dto/create.match.review.dto";
import { plainToInstance } from "class-transformer";
import { MatchReviewDto } from "./dto/match.review.dto";

@Injectable()
export class MatchReviewService {
    constructor( private readonly prisma: PrismaService ) {}

    async showUpMatchReview(matchReviewId: number) {
        try {
            const matchReview =  await this.prisma.matchReview.findUnique({
                where: {
                    id: matchReviewId
                },
                include: {
                    reviewer: true,
                    home_team: true,
                    away_team: true,
                }
            });
            return plainToInstance(MatchReviewDto, matchReview);
        } catch (error) {
            console.error('Error fetching match-reviews:', error);
            throw error;
        }
    };

    async createMatchReview(createMatchReviewDto: CreateMatchReviewDto){}
}