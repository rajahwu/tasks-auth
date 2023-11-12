#!/bin/bash

# Generate Sequelize model for Task
npx sequelize-cli model:generate --name Task --attributes title:string,description:string --config db/config/config.json --models-path db/models

# Run database migration
npx sequelize-cli db:migrate --config db/config/config.json --models-path db/models
