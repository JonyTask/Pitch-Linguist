type MailAddress = `${string}@${string}.com`;

export class SignInDto {
    email: MailAddress
    password: string

    constructor(partial: Partial<SignInDto>) {
        Object.assign(this, partial);
    }
}