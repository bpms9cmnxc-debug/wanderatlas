FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY www /usr/share/nginx/html

EXPOSE 80

LABEL org.opencontainers.image.title="Wanderatlas" \
      org.opencontainers.image.description="Interaktive Weltkarte — Länder markieren, Abdeckung sehen" \
      org.opencontainers.image.source="https://github.com/bpms9cmnxc-debug/wanderatlas"
