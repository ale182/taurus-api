#!/bin/bash

# Create ENV file
dockerize -template ./.docker/taurus-api/.env.example:.env

# Install Dependencies
yarn install

# Start Application mode development with
yarn start:dev
