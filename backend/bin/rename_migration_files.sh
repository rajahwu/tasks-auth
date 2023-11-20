#!/bin/bash

# Set the directory containing migration files
migration_dir="db/migrations"

# Loop through each migration file and rename it
for file in "$migration_dir"/*.js; do
  mv "$file" "${file%.js}.cjs"
done

echo "Migration files renamed successfully."
