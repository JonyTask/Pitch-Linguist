#ビルドステージ
FROM node:20.10.0 as build-stage

WORKDIR /app

RUN yarn install

COPY . .

#実行ステージ
FROM node:20.10.0

WORKDIR /app

COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage package*.json ./

CMD ["npm", "run", "dev"]