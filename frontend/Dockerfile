FROM node:20.10.0

WORKDIR /app

COPY next-front/package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]