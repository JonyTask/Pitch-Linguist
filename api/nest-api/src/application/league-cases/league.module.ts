import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { LeagueController } from "./league.controller";
import { LeagueService } from "./league.service";

@Module({
    imports: [PrismaModule],
    controllers: [LeagueController],
    providers: [LeagueService],
    exports: [LeagueService],
})

export class LeagueModule { }