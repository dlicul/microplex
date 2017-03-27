FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html

# COPY content /usr/share/nginx/html
COPY conf /etc/nginx/conf.d
