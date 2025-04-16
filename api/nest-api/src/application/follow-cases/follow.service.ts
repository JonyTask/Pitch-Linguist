import { Injectable, Request } from "@nestjs/common";
import { ToggleEvent } from "src/domain/domain-service/toggle.event";

@Injectable({})
export class FollowService {
    constructor(private readonly toggleEvent: ToggleEvent) { }

    private readonly followModel: string = 'following';
    private readonly activeKey: string = 'following_id';
    private readonly passiveKey: string = 'followed_id';
    private readonly uniqueKey: string = 'unique_following_followed';

    async toggleFollowState(@Request() req, insert_followed_id: bigint) {
        try {
            const userId = req.user.userId;
            return this.toggleEvent.checkExists(
                this.followModel,
                this.activeKey,
                this.passiveKey,
                this.uniqueKey,
                userId,
                insert_followed_id
            );
        } catch (error) {
            console.error('toggle like state :', error);
            throw error;
        }
    }
}