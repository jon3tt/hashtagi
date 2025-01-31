FROM nginx:latest

# Asennetaan tarvittavat työkalut sertifikaatin luontiin
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Määritetään sertifikaattien sijainti ja luodaan ne kehitystä varten
RUN mkdir -p /etc/nginx/certs && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/privkey.pem \
    -out /etc/nginx/certs/fullchain.pem \
    -subj "/CN=localhost"

# Kopioidaan Nginx-konfiguraatiot oikeaan paikkaan
COPY configs/nginx.conf /etc/nginx/nginx.conf
COPY configs/sites-enabled /etc/nginx/conf.d

# Varmistetaan, että oikeudet ovat kunnossa
RUN chmod 600 /etc/nginx/certs/privkey.pem /etc/nginx/certs/fullchain.pem

# Käynnistetään Nginx
CMD ["nginx", "-g", "daemon off;"]
