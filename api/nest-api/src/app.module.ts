import { Module } from "@nestjs/common";
import { ClubModule } from "./application/club-cases/club.module";
import { LeagueModule } from "./application/league-cases/league.module";
import { AuthModule } from "./application/auth-cases/auth.module";
import { UsersModule } from "./application/user-cases/users.module";

@Module({
    imports: [ClubModule, LeagueModule, AuthModule, UsersModule]
})
export class AppModule {}