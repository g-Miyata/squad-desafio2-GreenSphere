FROM node:latest

WORKDIR /GreenSphere-api

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000