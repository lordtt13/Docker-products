FROM node:alpine as builder

WORKDIR '/usr/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

## Exposes port 80 for production in AWS, exposing port 80 to utilize ngnix in prod
EXPOSE 80

COPY --from=builder /usr/section6/ui/build /usr/share/nginx/html

