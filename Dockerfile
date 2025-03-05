FROM node:22.12-slim as node

WORKDIR /app

COPY package.json package-lock.json* ./
COPY tsconfig.json ./
COPY nest-cli.json ./
COPY tsconfig.build.json ./

RUN npm ci
COPY src ./src

RUN npm run build
CMD [ "npm run start:prod" ]

