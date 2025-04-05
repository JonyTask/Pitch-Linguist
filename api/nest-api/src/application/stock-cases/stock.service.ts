import { Injectable, Request } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable({})
export class StockService {
    constructor(private readonly prisma: PrismaService) { }
    
    async toggleStockState(@Request() req, insert_match_review_id: bigint) {
        try {
            const userId = req.user.userId;
            const existingLike = await this.prisma.stock.findUnique({
                where: {
                    // Prismaのモデルでstamper_idとmatch_review_idを複合主キーまたはユニーク制約にしている前提です
                    unique_stocker_match_review: {
                        stocker_id: userId,
                        match_review_id: insert_match_review_id
                    },
                },
            });
            if (existingLike) {
                // レコードが存在していれば削除する（いいねの解除）
                await this.prisma.stock.delete({
                    where: {
                        unique_stocker_match_review: {
                            stocker_id: userId,
                            match_review_id: insert_match_review_id
                        },
                    },
                });
                return { message: 'Stock removed' };
            } else {
                // レコードが存在しなければ新規作成する（いいねする）
                await this.prisma.stock.create({
                    data: {
                        stocker_id: userId,
                        match_review_id: insert_match_review_id
                    },
                });
                return { message: 'Stock added' };
            }
        } catch (error) {
            console.error('toggle stock state :', error);
            throw error;
        }
    }
}