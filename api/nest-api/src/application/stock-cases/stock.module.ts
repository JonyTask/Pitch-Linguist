import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";
import { StockController } from "./stock.controller";
import { StockService } from "./stock.service";

@Module({
    imports: [PrismaModule],
    controllers: [StockController],
    providers: [StockService],
    exports: [StockService]
})

export class StockModule { }