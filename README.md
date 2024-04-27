[THIS IS CURRENTLY A WORK IN PROGRESS]
A full-stack web application that allows users to interact with a restaurant's menu, place orders, and manage customer accounts. This application is currently optimised for viewing on desktop.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)
* [PostgreSQL](https://www.postgresql.org/download/)

## Installation

* `git clone <repository-url>` this repository
* `cd restaurauntApp`
* `npm install`

## Running

* `npm run start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* The app opens to its home page by default. To view the menu, click on the "menu" button and scroll down.

## Backend
* Loopback3 files are found under the 'appRestaurant' folder, and is linked to a locally hosted PostgreSQL server.
* To link to your own server, change the details under 'appResaurant/server/datasources.json' and populate the tables using the queries found in the 'backend' folder.
* Note that Loopback 3 is not compatible with Node v15 and above. This application was built on Node v14.21.3.

## Current Progress
* Initial frontend consisting of home and menu pages has been set up.
* Backend skeleton complete, yet to implement using frontend.

## Future TODOs
* Complete orders and customer profile pages.
* Include navigation bar.
* Link backend and frontend.
