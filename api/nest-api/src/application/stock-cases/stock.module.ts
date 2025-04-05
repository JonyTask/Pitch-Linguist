import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { StockController } from "./stock.controller";
import { StockService } from "./stock.service";
import { DomainModule } from "src/domain/domain-service/domain.module";

@Module({
    imports: [PrismaModule, DomainModule],
    controllers: [StockController],
    providers: [StockService],
    exports: [StockService]
})

export class StockModule { }