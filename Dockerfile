FROM node:14-alpine
RUN mkdir /app && chown -R node:node /app
RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    openssl \ 
    libssl1.1
WORKDIR /app
COPY package.json yarn.lock ./
COPY --chown=node:node . .
RUN yarn install && yarn build && npm install -g prisma && yarn prisma generate --schema ./src/database/pgsql-schema.prisma && prisma generate --schema ./src/database/mongodb-schema.prisma
USER root
RUN apk del .build-deps
USER node
CMD ["yarn", "start"]
