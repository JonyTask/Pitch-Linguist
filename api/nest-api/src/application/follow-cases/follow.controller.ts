import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { FollowService } from "./follow.service";
import { JwtAuthGuard } from "../auth-cases/guard/jwt-auth.guard";

@Controller('follow')
export class FollowController {
    constructor(private followService: FollowService) { }
    
    @UseGuards(JwtAuthGuard)
    @Post('toggle')
    toggleFollowState(@Req() req, @Body() followData) {
        return this.followService.toggleFollowState(req, followData.followed_id)
    }
}