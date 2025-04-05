import { Injectable, Request } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { CreateMatchReviewDto } from "./dto/create.match.review.dto";
import { plainToInstance } from "class-transformer";
import { MatchReviewDto } from "./dto/match.review.dto";

@Injectable()
export class MatchReviewService {
    constructor(private readonly prisma: PrismaService) { }

    async showUpMatchReview(matchReviewId: number) {
        try {
            const matchReview = await this.prisma.matchReview.findUnique({
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

    async createMatchReview(@Request() req, createMatchReviewDto: CreateMatchReviewDto) {
        try {
            const userId = req.user.userId;
            return await this.prisma.matchReview.create({
                data: {
                    reviewer_id: userId,
                    home_team_id: createMatchReviewDto.home_team_id,
                    away_team_id: createMatchReviewDto.away_team_id,
                    match_date: createMatchReviewDto.match_date,
                    kick_off_at: createMatchReviewDto.kick_off_at,
                    match_review_text: createMatchReviewDto.match_review_text,
                    highlight_url: createMatchReviewDto.highlight_url,
                    status: 0
                }
            });
        } catch (error) {
            console.error('Error create match-review:', error);
            throw error;
        }
    }
}