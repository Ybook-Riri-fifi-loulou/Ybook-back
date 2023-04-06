FROM node:18.12.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma/
RUN npx prisma generate
COPY . .

EXPOSE 3100

CMD ["npm", "start"]