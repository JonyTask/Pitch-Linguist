import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable({})
export class StockService {
    constructor(private readonly prisma: PrismaService){}
}