import { Injectable, Request } from "@nestjs/common";
import { ToggleEvent } from "src/domain/domain-service/toggle.event";

@Injectable({})
export class LikeService {
    constructor(private readonly toggleEvent: ToggleEvent
    ) { }

    private readonly likeModel: string = 'like';
    private readonly activeKey: string = 'stamper_id';
    private readonly passiveKey: string = 'match_review_id';
    private readonly uniqueKey: string = 'unique_stamper_match_review';

    async toggleLikeState(@Request() req, insert_match_review_id: bigint) {
        try {
            const userId = req.user.userId;
            return this.toggleEvent.checkExists(
                this.likeModel,
                this.activeKey,
                this.passiveKey,
                this.uniqueKey,
                userId,
                insert_match_review_id
            );
        } catch (error) {
            console.error('toggle like state :', error);
            throw error;
        }
    }
}