FROM node:16-alpine

WORKDIR /api

COPY ./api .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:dev"]