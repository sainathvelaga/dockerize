FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
ENV PORT=5000
EXPOSE 5000
USER node
CMD ["npm", "start"]
