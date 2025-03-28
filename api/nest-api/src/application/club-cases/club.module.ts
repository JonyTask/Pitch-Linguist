import { Module } from "@nestjs/common";
import { ClubController } from "./club.controller";
import { ClubService } from "./club.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [ClubController],
    providers: [ClubService],
    exports: [ClubService]
})

export class ClubModule { }