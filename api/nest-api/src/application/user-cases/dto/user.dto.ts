import { Exclude } from "class-transformer";

export class UserDto {
    id: BigInt
    name: string
    role_id: number

    @Exclude()
    email: string

    @Exclude()
    password: string

    @Exclude()
    email_verified_at: Date

    @Exclude()
    profile_image: string

    @Exclude()
    updated_at: Date

    @Exclude()
    created_at: Date

    @Exclude()
    deleted_at: Date

    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial);
    }
}