FROM redis:7.0-alpine

# Kopioi konfiguraatiotiedosto konttiin
COPY configs/redis.conf /usr/local/etc/redis/redis.conf

# Määritä oletuskäynnistyskomento käyttämään custom-konfiguraatiota
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]