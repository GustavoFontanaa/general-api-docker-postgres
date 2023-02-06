FROM node:18.6.0-alpine3.15 AS development
COPY . /app
WORKDIR /app
COPY package.json ./
RUN npm install glob rimraf
RUN npm install --only=development
RUN npm run build

FROM node:18.6.0-alpine3.15 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY . /app
WORKDIR /app
COPY package.json ./
RUN npm pkg delete scripts.prepare
RUN npm install --only=production
COPY --from=development /app/dist /app/dist
CMD ["node", "dist/main"]