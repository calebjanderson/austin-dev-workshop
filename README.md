# Austin Developer Chat

Demo application for use in Austin Developer Week 2017 presentation

## Installation

Requires [node](http://www.nodejs.org) with [npm](http://www.npmjs.com) to get started. (Reccomend Node >= v6.0.0 && npm >= v4.0.0)

Clone down repositiory and cd into folder
```bash
npm install
```
This is how you would start the server without express
```bash
node server/no-express.js
```
If you want to start another version just change the filename to the type you want (`with-express.js`, `with-express-react`)

## Contents
```
client/
    ├── index.html  - Basic HTML page with a <form/>
    └── app.js      - Contains application logic, responsible for establishing click handlers and sending/processing HTTP requests/responses
server/
    ├── no-express.js   - Server implemenation using bare node
    └── with-express.js - Server implementation using express
package.json  - This file describes dependencies for this project. These packages are installed via npm
README.md - This is the file you're reading right now :)
```
