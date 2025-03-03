import { PrismaClient } from "@prisma/client"
import { fakerJA } from '@faker-js/faker'
import { faker } from '@faker-js/faker'

type MailAddress = `${string}@${string}.com`;

type FactoryUserProps = {
    name: string,
    email: MailAddress,
}

const fakeUser = (props?: FactoryUserProps) => {
    const result = {
        name: fakerJA.person.fullName(),
        email: faker.internet.email(),
        password: 'password',
        email_verified_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        profile_image: null,
        role_id: 10,
        updated_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        created_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        deleted_at: null,
    };

    return result;
}

const prisma = new PrismaClient();
async function main () {
    await prisma.user.createMany({
        data: [...Array(10)].map(() => fakeUser()),
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });