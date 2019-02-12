# Stage 1
#FROM node:8.11.2-alpine as node
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install
#EXPOSE 8081
#COPY . /app
#RUN npm run build --prod

# Stage 2
FROM node:8-alpine
RUN npm install http-server -g
EXPOSE 8081
CMD ["http-server", "dist/websocket"]
