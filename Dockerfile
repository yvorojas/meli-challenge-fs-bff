FROM node:carbon-alpine  AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build 

FROM node:carbon-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 8080
CMD node build/index.js

