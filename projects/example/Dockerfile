FROM cr.yandex/crpg0pddi1l3221pa7qq/main/node:14.16.1-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./services/messaging ./services/messaging/
COPY ./services/messaging/node_modules/ ./services/messaging/node_modules/
ARG VERSION
ENV VERSION=${VERSION:-1.0.0}
EXPOSE 443 80
WORKDIR /app/services/messaging
CMD yarn start
