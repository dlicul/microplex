#!/bin/bash
set -e
docker stop microplex-nginx
docker rm microplex-nginx
docker rmi microplex/nginx
