import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { LikeService } from "./like.service";
import { JwtAuthGuard } from "../auth-cases/guard/jwt-auth.guard";
import { LikeDto } from "./dto/like.dto";

@Controller('match-reviews/like')
export class LikeController {
    constructor(private likeService: LikeService) { }
    
    @UseGuards(JwtAuthGuard)
    @Post('toggle')
    toggleLikeState(@Req() req, @Body() likeData) {
        return this.likeService.toggleLikeState(req, likeData.match_review_id);
    }
}