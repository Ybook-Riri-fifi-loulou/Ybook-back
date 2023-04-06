FROM node:18.12.1-alpine as builder
WORKDIR /build
COPY ./prisma ./prisma
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

FROM node:18.12.1-alpine as runner
COPY --from=builder dist .

EXPOSE 3000

CMD ["node", "dist/index.js"]