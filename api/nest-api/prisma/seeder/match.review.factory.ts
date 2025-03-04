import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const dummyReviews = [
    {
        reviewer_id: 2,
        home_team_id: 3,
        away_team_id: 1,
        match_date: new Date('2025-03-08'),
        kick_off_at: new Date('2000-01-01T14:00:00'),
        match_review_text: '<title>match_review_HTML_レイソル<title>',
        highlight_url: 'https://www.youtube.com/watch?v=c3NsuykuuWQ',
        status: 0,
        updated_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        created_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        deleted_at: null,
    },
    {
        reviewer_id: 5,
        home_team_id: 2,
        away_team_id: 7,
        match_date: new Date('2025-03-08'),
        kick_off_at: new Date('2000-01-01T14:00:00'),
        match_review_text: '<title>match_review_HTML_浦和<title>',
        highlight_url: 'https://www.youtube.com/watch?v=c3NsuykuuWQ',
        status: 0,
        updated_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        created_at: faker.date.between({ from: '2025-01-01', to: Date.now() }),
        deleted_at: null,
    },
];
async function main() {
    for (const dummyReview of dummyReviews) {
        await prisma.matchReview.create({
            data: dummyReview
        })
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });