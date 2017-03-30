#!/bin/bash
set -e
docker build -t microplex/nginx .
docker run --name microplex-nginx -P -d microplex/nginx
docker ps
