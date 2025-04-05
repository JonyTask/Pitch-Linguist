import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable({})
export class LikeService {
    constructor(private readonly prisma: PrismaService){}
}