FROM node:latest as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM scratch
COPY --from=build /app/build /app
