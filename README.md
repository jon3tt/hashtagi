# README

## 🔍 Rakenne ja sisältö

- 📂 Root kansio
- 🕔 build.bat (windows)
- 🕔 build.sh (linux)
    - 📂 networks
        - 🕄 redis_network.yml
    - 📂 services
        - 📂 api
        - 📂 backend
        - 📂 database
        - 📂 frontend
            - 🕄 docker-compose.yml
            - 🕄 Dockerfile
            - 📂 app
                - 🕄 package.json
                - 📂 public
                    - 🕄 index.html
                    - 📂 ui
                        - 📂 css
                            - 🕄 app.css
                        - 📂 gallery
                            - 🖼️ favicon.webp
                        - 📂 lang
                            - 🕄 fi.json
                - 📂 src
                    - 🕄 App.js
                    - 🕄 index.js
                    - 📂 Blog
                        - 🕄 Blog.js
                    - 📂 Components
                        - 🕄 Cookie.js
                        - 🕄 FetchLang.js
                        - 🕄 FetchNewsApi.js
                        - 🕄 Heading.js
                        - 🕄 useLocalization.js
                        - 🕄 Panels.js
                        - 🕄 UpdatePageTitle.js
                    - 📂 Home
                        - 🕄 Home.js
                    - 📂 News
                        - 🕄 Home.js
            - 📂 configs
                - 🕄 nginx.conf

        - 📂 proxy
            - 🕄 docker-compose.yml
            - 🕄 Dockerfile
            - 📂 certs
            - 📂 configs
                - 🕄 nginx.conf
                - 📂 sites-enabled
                    - 🕄 default.conf
        - 📂 redis
            - 🕄 docker-compose.yml
            - 🕄 Dockerfile
            - 📂 configs
                - 🕄 redis.conf
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

### 3. **frontend (React + Nginx)**
Frontend-palvelussa on React-sovellus, joka palvellaan Nginxin kautta. Kansioiden rakenne on optimoitu sekä kehitys- että tuotantokäyttöön.
- **Dockerfile:** Määrittelee Reactin rakennuksen ja tuotantovaiheen Nginxin kanssa.
- **docker-compose.yml:** Sisältää kehityksen voluumit ja verkkoasetukset.
- **configs/nginx.conf:** Nginxin konfiguraatiotiedosto, joka ohjaa kaikki pyynnöt oikein Reactin root-diviin.
- **app:** Sisältää React-projektin tiedostot.

> **Huom:** Voluumi mahdollistaa kehityksen ilman jatkuvaa uudelleenrakennusta.

Lisäksi:
- **`src/Components/useLocalization.js`** hallitsee Reactin kielitiedostojen latausta asynkronisesti.
- **`src/Components/FetchLang.js`** hakee kielitiedostot API:sta.
- **`src/Components/FetchNewsApi.js`** suorittaa API-kutsuja uutispalveluun.

---

### 4. **redis (docker-compose.yml, Dockerfile)**
Redis-palvelun kansiossa hallitaan sen Dockerfile ja tarvittavat asetukset.
- **Dockerfile:** Määrittelee, miten Redis rakennetaan.
- **docker-compose.yml:** Sisältää palvelun riippuvuudet, verkkoasetukset ja volyymit.

> **Vinkki:** Entry-point-skripti voidaan lisätä hallitsemaan dynaamisia asetuksia, jos ympäristömuuttujia tarvitaan.

---

### 5. **configs (redis.conf)**
Redis-palvelun tärkeät konfiguraatiot sijaitsevat configs-kansiossa. Tämä rakenne mahdollistaa konfiguraation helpon vaihtamisen eri ympäristöjen välillä, esimerkiksi dev, test ja prod.

---

### 6. **proxy (Nginx-proxy)**
Proxy-palvelu käsittele kaikki sisääntulevat pyynnöt ja ohjaa ne oikeisiin palveluihin porttien mukaan.
- **Portti 80/443:** Ohjaa pyynnöt frontend-palveluun.
- **Portti 8008:** Ohjaa pyynnöt backend-palveluun.
- **Portti 8009:** Ohjaa pyynnöt API-palveluun.
- **configs/sites-enabled/default.conf:** Sisältää väliaikaisten reititysten asetukset kehitystä varten.

---

### 7. **volumes**
Volyymit-kansio on hyödyllinen silloin, kun palvelut tarvitsevat pysyvää tallennustilaa. Esimerkiksi Redis tallentaa datansa **redis_data**-kansioon, jolloin tiedot säilyvät konttien uudelleenkäynnistyksissä.

> **Varmista:** Docker Compose -tiedostossa volyymit on liitetty oikein, jotta data tallentuu pysyvästi.

## 🔧 Laajentaminen ja mukauttaminen

- **Ympäristökohtaiset asetukset:** Luo configs-kansioon alikansiot (esim. **dev**, **prod**, **test**) ympäristökohtaisia asetuksia varten.

- **Palvelukohtaiset kirjastot:** Voit sijoittaa palvelukohtaiset kirjastot ja riippuvuudet palvelujen sisälle.

## 📌 Hyödylliset komennot

- **Tarkista Redis-palvelimen tila:**
  ```bash
  redis-cli info persistence
  ```
- **Luo Redis-verkko:**
  ```bash
  docker network create redis_network
  ```

