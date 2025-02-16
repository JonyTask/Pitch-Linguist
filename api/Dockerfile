FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN yarn install

COPY . .

CMD ["npm", "run", "start:dev"]
