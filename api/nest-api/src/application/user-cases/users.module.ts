import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [UsersService],
    exports: [UsersService],
})

export class UsersModule { }