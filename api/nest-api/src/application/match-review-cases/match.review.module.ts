import { Module } from "@nestjs/common";
import { PrismaModule } from "src/domain/prisma/prisma.module";
import { MatchReviewController } from "./match.review.controller";
import { MatchReviewService } from "./match.review.service";

@Module({
    imports: [PrismaModule],
    controllers: [MatchReviewController],
    providers: [MatchReviewService],
    exports: [MatchReviewService],
})

export class MatchReviewModule {}