ARG arch=amd64
FROM --platform=linux/${arch} node:current-alpine AS base
WORKDIR /app

FROM base AS final
EXPOSE 10111
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm ci
COPY ./dist/ /app/
CMD ["npm", "start"]
