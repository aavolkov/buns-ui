FROM nginx:1.19.5

COPY build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/

RUN chown -R nginx:nginx /var/cache/nginx /etc/nginx/ /var/run/

USER nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
