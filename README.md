# Lemon Aide API

This repo is meant to be used in conjunction with our front end repository  **[Lemon Aide](https://github.com/isleofyou/lemon-aide)** 

## Prerequisites
* [PostgreSQL](https://www.postgresql.org/download/)

## Set Up

Clone down this repo, and `cd` into it. Then, from the command line:

1. `psql`

1. `CREATE DATABASE lemon_aide`

1. `exit`

1. `npm install`

1. `knex migrate:latest`

1. `knex seed:run`

1. `node server.js`

## Schema
`product` table

| id | name                      | color            | img_url     | category  | favorite | created_at    | updated_at    |
|----|---------------------------|------------------|-------------|-----------|----------|---------------|---------------|
| 1  | Sculpt Tank               | Rainforest Green | https://... | top       | false    | 2022-01-12... | 2022-01-12... |
| 2  | Wunder Under HR Tight     | Black            | https://... | bottom    | true     | 2022-01-12... | 2022-01-12... |
| 3  | Easy Access Crossbody Bag | Black            | https://... | accessory | false    | 2022-01-12... | 2022-01-12... |

`outfit` table
| id | top_id | bottom_id | accessory_id | created_at    | updated_at    |
|----|--------|-----------|--------------|---------------|---------------|
| 1  | 1      | 2         | 3            | 2022-01-12... | 2022-01-12... |
| ...| ...    | ...       | ...          | ...           | ...           |

## Endpoints
  - GET `/api/v1/all-products`
  - GET `/api/v1/favorites`
  - GET `/api/v1/outfits`
  - PUT `/api/v1/favorites/:id`
  - POST `/api/v1/outfits`
  - DELETE `/api/v1/outfits/:id`

## Challenges
  - Trying to come up with a schema for our tables.
  - Trying to understand, implement, update, troubleshoot, and run migrations and seeds.
  - Not being able to see the tables with our seed information outside of the Postgres CLI. Luckily, DBeaver resolved that issue.
  - The Knex querying syntax was a bit difficult to implement at first because I didn’t really understand that our query was able to return whatever columns (data) we needed. Re-reading the docs and console logging dozens of times helped resolve this issue.
  - Realizing that our teammates had to create the database and tables on their local repositories, run a migration and seed it in order for them to see what I was seeing on my end.

## Wins
  - Successfully created a backend server and database that was able to be used for our front end application.
  - Learning about databases and querying and how useful and powerful they really are for all front end applications.
  - With the exception of "PATCH", we were able to implement all of the HTTP methods.
  - Being able to sift through the Knex docs and implement querying methods as needed.
  - Deploying both the Express server and Postgres database to Heroku.