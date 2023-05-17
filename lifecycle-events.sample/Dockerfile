ARG arch=amd64
FROM --platform=linux/${arch} node:current-alpine AS base
WORKDIR /app

FROM base AS final
EXPOSE 10111

COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci

COPY ./dist/ .
CMD ["npm", "start"]
