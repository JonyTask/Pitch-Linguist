import { forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../user-cases/users.service";
import { SerializeBigInt } from "src/infrastructure/utils/SerializeBigInt";

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async signIn(
        email: string,
        password: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findUser(email);
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const userId = SerializeBigInt.serialize(user).toString();
        
        const payload = { sub: userId, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}