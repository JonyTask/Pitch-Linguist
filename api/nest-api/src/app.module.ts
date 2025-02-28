import { Module } from "@nestjs/common";
import { ClubModule } from "./application/club-cases/club.module";
import { LeagueModule } from "./application/league-cases/league.module";

@Module({
    imports: [ClubModule, LeagueModule]
})
export class AppModule {}