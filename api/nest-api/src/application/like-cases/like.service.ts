import { Injectable, Request } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { LikeDto } from "./dto/like.dto";

@Injectable({})
export class LikeService {
    constructor(private readonly prisma: PrismaService) { }
    
    async toggleLikeState(@Request() req, insert_match_review_id: bigint) {
        try {
            const userId = req.user.userId;
            const existingLike = await this.prisma.like.findUnique({
                where: {
                    // Prismaのモデルでstamper_idとmatch_review_idを複合主キーまたはユニーク制約にしている前提です
                    unique_stamper_match_review: {
                        stamper_id: userId,
                        match_review_id: insert_match_review_id
                    },
                },
            });
            if (existingLike) {
                // レコードが存在していれば削除する（いいねの解除）
                await this.prisma.like.delete({
                    where: {
                        unique_stamper_match_review: {
                            stamper_id: userId,
                            match_review_id: insert_match_review_id
                        },
                    },
                });
                return { message: 'Like removed' };
            } else {
                // レコードが存在しなければ新規作成する（いいねする）
                await this.prisma.like.create({
                    data: {
                        stamper_id: userId,
                        match_review_id: insert_match_review_id
                    },
                });
                return { message: 'Like added' };
            }
        } catch (error) {
            console.error('toggle like state :', error);
            throw error;
        }
    }
}