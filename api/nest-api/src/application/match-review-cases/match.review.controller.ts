import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MatchReviewService } from "./match.review.service";
import { CreateMatchReviewDto } from "./dto/create.match.review.dto";

@Controller('match-reviews')
export class MatchReviewController {
    constructor(private matchReviewService: MatchReviewService) {}

    @Get('show-up/:matchReviewId')
    showUpMatchReview(@Param('matchReviewId') matchReviewId: number) {
        return this.matchReviewService.showUpMatchReview(matchReviewId);
    }

    @Post('create')
    createMatchReview(@Body() createMatchReviewDto: CreateMatchReviewDto) {
        return this.matchReviewService.createMatchReview(createMatchReviewDto);
    }
}