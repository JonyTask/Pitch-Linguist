# Pitch-Linguist
試合の評論メディア

## 使用技術一覧

<img src="https://img.shields.io/badge/-Docker-2496ED.svg?logo=docker&style=flat"> <img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat">
<img src="https://img.shields.io/badge/-NestJS-E0234E.svg?logo=NestJS&style=flat"> <img src="https://img.shields.io/badge/-NextJS-000000.svg?logo=Next.js&style=flat">
<img src="https://img.shields.io/badge/-postgresql-ffffff.svg?logo=postgresql&style=flat"> <img src="https://img.shields.io/badge/-Prisma-2D3748.svg?logo=Prisma&style=flat">
<img src="https://img.shields.io/badge/-TailWind CSS-007ACC.svg?logo=Tailwind-CSS&style=flat"> <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC.svg?logo=visual-studio-code&style=flat">

## 環境構築

1. ルートディレクトリにある.env.example → .env
2. それぞれ環境変数を定義
3. 以下のコマンド
```
docker compose up -d --build

docker compose exec nestjs bash

npx prisma migrate dev --name init

npx ts-node ./prisma/seeder/user.factory.ts
npx ts-node ./prisma/seeder/club.factory.ts
```
