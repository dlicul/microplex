#!/bin/bash
set -e
docker stop microplex-controller
docker rm microplex-controller
docker rmi microplex/controller
