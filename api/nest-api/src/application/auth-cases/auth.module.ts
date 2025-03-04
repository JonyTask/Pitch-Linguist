import { Module } from "@nestjs/common";
import { UsersModule } from "../user-cases/users.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { jwtConstants } from "./constants";
import { PassportModule } from "@nestjs/passport";
import { JWTStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService, JWTStrategy, LocalStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})

export class AuthModule {}