
FROM node:16-alpine

WORKDIR /app

RUN yarn global add @nestjs/cli

COPY package*.json ./

COPY yarn.lock ./

RUN yarn --prod --silent --ignore-engines

COPY . /app

RUN yarn build

CMD ["yarn", "start:prod"]
