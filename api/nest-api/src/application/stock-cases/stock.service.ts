import { Injectable, Request } from "@nestjs/common";
import { ToggleEvent } from "src/domain/domain-service/toggle.event";

@Injectable({})
export class StockService {
    constructor(private readonly toggleEvent: ToggleEvent
    ) { }

    private readonly stockModel: string = 'stock';
    private readonly activeKey: string = 'stocker_id';
    private readonly passiveKey: string = 'match_review_id';
    private readonly uniqueKey: string = 'unique_stocker_match_review';

    async toggleStockState(@Request() req, insert_match_review_id: bigint) {
        try {
            const userId = req.user.userId;
            return this.toggleEvent.checkExists(this.stockModel, this.activeKey, this.passiveKey, this.uniqueKey, userId, insert_match_review_id);
        } catch (error) {
            console.error('toggle stock state :', error);
            throw error;
        }
    }
}