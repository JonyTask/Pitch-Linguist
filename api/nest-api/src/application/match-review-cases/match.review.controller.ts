import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { MatchReviewService } from "./match.review.service";
import { CreateMatchReviewDto } from "./dto/create.match.review.dto";
import { JwtAuthGuard } from "../auth-cases/guard/jwt-auth.guard";

@Controller('match-reviews')
export class MatchReviewController {
    constructor(private matchReviewService: MatchReviewService) {}

    @Get('show-up/:matchReviewId')
    showUpMatchReview(@Param('matchReviewId') matchReviewId: number) {
        return this.matchReviewService.showUpMatchReview(matchReviewId);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createMatchReview(@Req() req, @Body() createMatchReviewDto: CreateMatchReviewDto) {
        return this.matchReviewService.createMatchReview(req, createMatchReviewDto);
    }
}