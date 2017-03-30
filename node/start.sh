#!/bin/bash
set -e
docker build -t microplex/controller .
docker run --name microplex-controller -P -d microplex/controller
docker ps
