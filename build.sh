#!/bin/bash

# Tarkistetaan redis verkon tila ja luodaan se tarvittaessa
docker network inspect redis_network >/dev/null 2>&1 || docker network create --driver bridge redis_network

# Käynnistä redis
docker-compose -f services/redis/docker-compose.yml up -d

# Käynnistä proxy
docker-compose -f services/proxy/docker-compose.yml up -d