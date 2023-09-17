FROM node:18.16.1-bookworm as build

WORKDIR /usr/src/front

COPY package.json yarn.lock ./
RUN yarn install \
    && yarn cache clean

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]