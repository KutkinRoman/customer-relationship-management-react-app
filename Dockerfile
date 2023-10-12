FROM node:14.18.1 as build

COPY package*.json ./

RUN npm install --silent --only=production

COPY . .

COPY .env_prod .env

RUN npm run build

FROM nginx:1.16.0-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]