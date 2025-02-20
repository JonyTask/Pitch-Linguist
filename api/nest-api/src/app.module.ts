import { Module } from "@nestjs/common";
import { ClubModule } from "./application/club-cases/club.module";

@Module({
    imports: [ClubModule]
})
export class AppModule {}