#!/bin/bash

# Generate Sequelize model for User
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string --config db/config/config.json --models-path db/models

# Run database migration
npx sequelize-cli db:migrate --config db/config/config.json --models-path db/models
