import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable({})
export class ToggleEvent {
    constructor(private readonly prisma: PrismaService) {}

    async checkExists(insertDB: string, activeKey: string, passiveKey: string, uniqueKey: string, userId: bigint, passiveId: bigint) {
        const existedBool = await this.prisma[insertDB].findUnique({
            where: {
                [uniqueKey]: {
                    [activeKey]: userId,
                    [passiveKey]: passiveId
                }
            }
        });

        if (existedBool) {
            await this.prisma[insertDB].delete({
                where: {
                    [uniqueKey]: {
                        [activeKey]: userId,
                        [passiveKey]: passiveId
                    }
                }
            });
            return { message: `${uniqueKey} removed` };
        } else {
            await this.prisma[insertDB].create({
                data: {    
                    [activeKey]: userId,
                    [passiveKey]: passiveId
                }
            });
            return { message: `${uniqueKey} added` };
        }
    }
}