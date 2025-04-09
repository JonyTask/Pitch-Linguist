import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain-service/domain.module";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { FollowController } from "./follow.controller";
import { FollowService } from "./follow.service";

@Module({
    imports: [PrismaModule, DomainModule],
    controllers: [FollowController],
    providers: [FollowService],
    exports: [FollowService]
})

export class FollowModule {}