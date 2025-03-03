import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/domain/prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findUser(email: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
            }
        });
    }
}