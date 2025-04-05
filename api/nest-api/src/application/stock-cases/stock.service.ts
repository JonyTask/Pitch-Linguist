import { Injectable, Request } from "@nestjs/common";
import { ToggleEvent } from "src/domain/domain-service/toggle.event";

@Injectable({})
export class StockService {
    constructor( private readonly toggleEvent: ToggleEvent
    ) {}

    private readonly insertDB: string = 'stock';
    
    async toggleStockState(@Request() req, insert_match_review_id: bigint) {
        try {
            const userId = req.user.userId;
            return this.toggleEvent.checkExists(this.insertDB, userId, insert_match_review_id);
        } catch (error) {
            console.error('toggle stock state :', error);
            throw error;
        }
    }
}