# Lemon Aide API - Strech Tech project by Ivonne Hernandez, David Tran, and Markus Rossio. Mod 3 2108 FE

This repo is meant to be used in conjunction with **[Lemon Aide](https://github.com/isleofyou/lemon-aide)** by Ivonne Hernandez, David Tran, and Markus Rossio.

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