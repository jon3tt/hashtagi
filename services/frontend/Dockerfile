# 1. Rakennusvaihe: Rakennetaan React-sovellus
FROM node:lts AS builder

# Työhakemisto
WORKDIR /app

# Asennetaan riippuvuudet
COPY ./app/package.json ./app/package-lock.json ./
RUN npm install

# Kopioidaan kaikki lähdekoodi ja rakennetaan
COPY ./app ./
RUN npm run build

# 2. Tuotantovaihe: Nginx palvelee rakennettua sovellusta
FROM nginx:alpine

# Kopioidaan Nginxin konfiguraatio
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

# Työhakemisto Nginxille
WORKDIR /usr/share/nginx/html

# Poistetaan oletus Nginx-tiedostot ja kopioidaan rakennetut tiedostot
RUN rm -rf ./*
COPY --from=builder /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
