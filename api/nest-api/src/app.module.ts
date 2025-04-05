import { Module } from "@nestjs/common";
import { ClubModule } from "./application/club-cases/club.module";
import { LeagueModule } from "./application/league-cases/league.module";
import { AuthModule } from "./application/auth-cases/auth.module";
import { UsersModule } from "./application/user-cases/users.module";
import { MatchReviewModule } from "./application/match-review-cases/match.review.module";
import { LikeModule } from "./application/like-cases/like.module";
import { StockModule } from "./application/stock-cases/stock.module";

@Module({
    imports: [ClubModule, LeagueModule, AuthModule, UsersModule, MatchReviewModule, LikeModule, StockModule]
})
export class AppModule {}