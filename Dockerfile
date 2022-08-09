# FROM node:10.16.1-alpine AS builder
# WORKDIR /DockerTms
# COPY . .
# RUN npm i
# RUN ng build --prod

# FROM nginx:1.15.8-alpine
# COPY /dist/training-management-system /usr/share/nginx/html
FROM node:latest as builder
RUN mkdir -p /dockerTMS
WORKDIR /dockerTMS
COPY . .
RUN npm install
RUN npm run build --prod
# CMD ["npm","start"]