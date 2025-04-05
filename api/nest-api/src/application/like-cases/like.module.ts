import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { LikeController } from "./like.controller";
import { LikeService } from "./like.service";
import { DomainModule } from "src/domain/domain-service/domain.module";

@Module({
    imports: [PrismaModule, DomainModule],
    controllers: [LikeController],
    providers: [LikeService],
    exports: [LikeService]
})

export class LikeModule { }