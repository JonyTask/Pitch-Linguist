import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable({})
export class ToggleEvent {
    constructor(private readonly prisma: PrismaService) {}

    selectedKey: string = '';
    private readonly likeModel: string = 'like';
    private readonly likeKey: string = 'stamper';
    private readonly stockModel: string = 'stock';
    private readonly stockKey: string = 'stocker';

    async checkExists(insertDB: string, userId: bigint, insert_match_review_id: bigint) {
        if (insertDB == this.likeModel) {
            this.selectedKey = this.likeKey;
        } else if (insertDB == this.stockModel) {
            this.selectedKey = this.stockKey;
        }

        const selectedUniqueKey = `unique_${this.selectedKey}_match_review`;
        const selectedId = `${this.selectedKey}_id`;
        const existedBool = await this.prisma[insertDB].findUnique({
            where: {
                [selectedUniqueKey]: {
                    [selectedId]: userId,
                    match_review_id: insert_match_review_id
                }
            }
        });

        if (existedBool) {
            await this.prisma[insertDB].delete({
                where: {
                    [selectedUniqueKey]: {
                        [selectedId]: userId,
                        match_review_id: insert_match_review_id
                    }
                }
            });
            return { message: `${selectedUniqueKey} removed` };
        } else {
            await this.prisma[insertDB].create({
                data: {    
                    [selectedId]: userId,
                    match_review_id: insert_match_review_id
                }
            });
            return { message: `${selectedUniqueKey} added` };
        }
    }
}