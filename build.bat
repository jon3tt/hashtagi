@echo off

REM Tarkistetaan redis verkon tila ja luodaan se tarvittaessa
docker network inspect redis_network >nul 2>&1 || docker network create --driver bridge redis_network

REM Käynnistä redis
docker-compose -f services\redis\docker-compose.yml up -d

REM Käynnistä proxy
docker-compose -f services/proxy/docker-compose.yml up -d