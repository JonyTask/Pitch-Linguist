import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { StockService } from "./stock.service";
import { JwtAuthGuard } from "../auth-cases/guard/jwt-auth.guard";

@Controller('match-reviews/stock')
export class StockController {
    constructor(private stockService: StockService) { }
    
    @UseGuards(JwtAuthGuard)
    @Post('toggle')
    toggleStockState(@Req() req, @Body() stockData) {
        return this.stockService.toggleStockState(req, stockData.match_review_id);
    }
}