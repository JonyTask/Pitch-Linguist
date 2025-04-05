import { Global, Module } from "@nestjs/common";
import { ToggleEvent } from "./toggle.event";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";

@Global()
@Module({
    imports: [PrismaModule],    
    providers: [ToggleEvent],
    exports: [ToggleEvent],
})
export class DomainModule {}