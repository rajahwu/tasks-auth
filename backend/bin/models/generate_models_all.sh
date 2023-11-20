#!/bin/bash

# Generate Sequelize models for User and Task
./bin/generate_model_user.sh
./bin/generate_model_task.sh

./bin/rename_migration_files.sh