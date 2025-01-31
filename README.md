# README

## 🔍 Rakenne ja sisältö

- 📂 Root kansio
- 📔 build.bat (windows)
- 📔 build.sh (linux)
    - 📂 networks
        - 📄 redis_network.yml
    - 📂 services
        - 📂 api
        - 📂 backend
        - 📂 database
        - 📂 frontend
        - 📂 proxy
          - 📄 docker-compose.yml
          - 📄 Dockerfile
          - 📂 certs
          - 📂 configs
            - 📄 nginx.conf
            - 📂 sites-enabled
              - 📄 default.conf
        - 📂 redis
            - 📄 docker-compose.yml
            - 📄 Dockerfile
            - 📂 configs
                - 📄 redis.conf
    - 📂 volumes
        - 📂 redis_data

## 💡 Rakenne ja hyödyt

- **Selkeys ja modulaarisuus:**
    - Jokainen palvelu on omassa kansiossaan, mikä mahdollistaa niiden itsenäisen hallinnan ja versionhallinnan.

- **Laajennettavuus:**
    - Uusia palveluita, konfiguraatioita tai verkkoasetuksia voi helposti lisätä tai poistaa vaikuttamatta muihin palveluihin.

- **Helppo siirrettävyys:**
    - Selkeä kansiorakenne mahdollistaa palveluiden eristämisen ja siirtämisen eri ympäristöihin, kuten kehityksestä tuotantoon.

- **Konfiguraatioiden hallinta:**
    - Redis-palvelun konfiguraatiot löytyvät helposti configs-kansiosta, mikä helpottaa eri ympäristöjen, kuten kehityksen, testauksen ja tuotannon hallintaa.

## 📂 Kansioiden selitykset ja käyttötarkoitukset

### 1. **networks**
Tähän kansioon tallennetaan Docker-verkkojen määrittelyt. Verkkojen eriyttäminen auttaa hallitsemaan yksityisiä ja julkisia yhteyksiä eri palveluiden välillä. Esimerkiksi **redis_network.yml** määrittää Redis-palvelun tarvitseman verkon.

---

### 2. **services**
Jokaisella palvelulla (api, backend, database jne.) on oma erillinen kansionsa. Tämä mahdollistaa palvelukohtaiset Dockerfilet, konfiguraatiot ja skriptit.

> **Huom:** Jos palvelut tarvitsevat erityisiä asetuksia, jokaiselle voi luoda oman **docker-compose.yml**-tiedoston.

---

### 3. **redis (docker-compose.yml, Dockerfile)**
Redis-palvelun kansiossa hallitaan sen Dockerfile ja tarvittavat asetukset.
- **Dockerfile** määrittelee, miten Redis rakennetaan.
- **docker-compose.yml** sisältää palvelun riippuvuudet, verkkoasetukset ja volyymit.

> **Vinkki:** Entry-point-skripti voidaan lisätä hallitsemaan dynaamisia asetuksia, jos ympäristömuuttujia tarvitaan.

---

### 4. **configs (redis.conf)**
Redis-palvelun tärkeät konfiguraatiot sijaitsevat configs-kansiossa. Tämä rakenne mahdollistaa konfiguraation helpon vaihtamisen eri ympäristöjen välillä, esimerkiksi dev, test ja prod.

---

### 5. **volumes**
Volyymit-kansio on hyödyllinen silloin, kun palvelut tarvitsevat pysyvää tallennustilaa. Esimerkiksi Redis tallentaa datansa **redis_data**-kansioon, jolloin tiedot säilyvät konttien uudelleenkäynnistyksissä.

> **Varmista:** Docker Compose -tiedostossa volyymit on liitetty oikein, jotta data tallentuu pysyvästi.

## 🔧 Laajentaminen ja mukauttaminen

- **Ympäristökohtaiset asetukset:** Luo configs-kansioon alikansiot (esim. **dev**, **prod**, **test**) ympäristökohtaisia asetuksia varten.
    - Tämä mahdollistaa esimerkiksi tuotanto- ja kehitysympäristöjen erilaisten asetusten helpon hallinnan.

- **Palvelukohtaiset kirjastot:** Voit sijoittaa palvelukohtaiset kirjastot ja riippuvuudet palvelujen sisälle, esimerkiksi näin:
    - **services/api**
        - **src** (lähdekoodi)
        - **vendor** (esim. Composer- tai NPM-riippuvuudet)
        - **config** (palvelun asetukset)

## 🔑 Yhteenveto
Tämä kansiorakenne tukee skaalautuvaa ja selkeää järjestelmän hallintaa. Se mahdollistaa palveluiden, konfiguraatioiden ja volyymien hallinnan tehokkaasti niin kehityksessä kuin tuotannossa. Pidä rakenteen peruslogiikka yksinkertaisena, mutta riittävän joustavana mahdollisille laajennuksille.

## 📌 Hyödylliset komennot

- **Yhdistä Redis-palveluun kontissa:**
  ```bash
  docker exec -it redis_service sh
  ```
- **Tarkista Redis-palvelimen tila:**
  ```bash
  redis-cli info persistence
  ```
- **Luo Redis-verkko:**
  ```bash
  docker network create redis_network
  ```

