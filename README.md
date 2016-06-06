# Hackifieds
An app for viewing and posting classified listings, for Hack Reactor members only.

## Table of Contents
- [Example / Usage](#example--usage)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
  - [High Level Architecture](#high-level-architecture)
  - [Database Schema](#database-schema)
- [API / Endpoints](#api--endpoints)
- [Contributing](#contributing)
- [Questions And Issues](#questions-and-issues)
- [Meta](#meta)
  - [Project Engineers](#project-engineers)
  - [License](#license)

## Example / Usage
1. Three forums/categories currently exist: Rent, Buy, and Hack.  Clicking on the category name will show you all listings for that category name.
2. Filtering listings by location (for a specific category name) is possible via the filter sidebar.
3. Clicking on a listing title will pop open detailed listing info for that particular listing.  You cannot see particular details (i.e. email, phone number) until the app has authenticated you via github.
4. If you are logged in / authenticated via github, you will be allowed to create a new listing in the category of your choice.

## Getting Started

1. Start the MySQL server.  Hackifieds will run on MySQL or Mariadb and has been tested on each DBMS:

For Linux, using systemd:

```bash
$ systemctl start mysqld.service
```

For OSX:

$ /usr/local/mysql/bin/mysqld_safe

2. Start up MySQL interpreter.  If starting for the first time, create the app's database:

```bash
$ mysql -u root
```

At the mysql prompt:

```bash
> CREATE DATABASE hackifieds;
```

3. Install required package dependencies:

```bash
$ npm install
```

4. Install webpack and run persistent webpack process to transpile/pack as needed when app source files change:

```bash
$ npm install -g webpack
$ webpack --watch
```

5. Start the server process from the project root directory:

```bash
$ npm start
```

6. Seed the database tables with sample data set (seed file located at -/hackifieds/db/seed.js)

```bash
$ node seed.js
```

7. Navigate to http:/127.0.0.1:3000 in a browser to access the client app.

## Architecture
### High Level Architecture
![Architecture](/readme/architecture.png)
### Database Schema
Mysql using Sequelize ORM
![Schema](/readme/schema.png)

## API / Endpoints
### `GET /auth/github`

Sends authentication request to github

### `GET /auth/github/github/callback`

Handle authentication reutrn from github

### `GET /api/listings`

Return database Listings table rows (joined with certain fields from Users and Categories tables) to client

### `POST /api/listings`

Receive a listing table row from the client (associated with a specific user) and insert it into database

### `GET /api/categories`

Return database Categories table rows to client

### `GET /api/auth`

Return session to user

### `GET /api/logout`

Destroy the client's current session and redirect client to main page of app

## Contributing
[Hackifieds] was built using waffle.io as the project organization tool.
Please visit the [gitflow.md](/readme/gitflow.md) for our workflow guidelines.

## Questions And Issues
For any issues, please refer to [**our issues page**](https://github.com/hackifieds/hackifieds/issues)
Please direct any questions regarding [Hackifieds] to [**our wiki page**](https://github.com/hackifieds/hackifieds/wiki)

## Meta
### Project Engineers
Development Team
- [**Malavika Neti**](https://github.com/malaneti)
- [**Brett Lensvelt**](https://github.com/lensvelt)

Scrum Master
- [**Andrew Phavichitr**](https://github.com/aphavichitr)

Product Owner
- [**Gabriel F.**](https://github.com/gfncodes)

### License
Distributed under the MIT License

