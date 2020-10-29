A simple MERN Todo List app which uses CRUD tools with JWT authentication.

### Table of Contents

You're sections headers will be used to reference location of destination.

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [GET Routes](#getroutes)
- [Beyond GET Routes](#beyondgetroutes)
- [Postman](#postman)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

## Features

- Node js
- Express js
- React js
- MongoDB
- JWT auth

## Requirements

- [node & npm](https://nodejs.org/en/)
- [mongo](https://account.mongodb.com/account/login)

## Installation

- `01.\DOWNLOAD THE ZIP REPOSITORY`
- `02.\_UNZIP`
- `03.\_CD INTO PROJECT`
- `04.\_NPM INSTALL`
- `05.\_CD INTO PROJECT IN CLIENT FOLDER`
- `06.\_NPM INSTALL`
- `07.\CD OUT AND BACK INTO ROOT FOLDER`
- `08.\_NPM RUN DEV - USING CONCURRENTLY TO RUN BOTH SERVERS IN ONE COMMAND`
- `10.\_ENJOY!`

### GET Routes

- visit http://localhost: I’m 5000

  - /add/
  - /add/:id

### Beyond GET Routes

#### CURL

- Create a new car with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:5000/`
  - Update a car in list with:
  - `curl -X PUT -H "Content-Type:application/json" http://localhost:5000/add`
- Delete a car from collection with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:5000/:id`

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:5000/api
  - Method: POST
  - Body: raw + JSON (application/json)
  - Update a message with:
  - URL: http://localhost:5000/:id`
  - Method: PUT
- Delete a message with:
  - URL: http://localhost:5000/:id`
  - Method: DELETE

## References

Hyperion Development Bootcamp

[Back To The Top](#read-me-template)

---

## License

MIT License

Copyright (c) [2020][david k miller]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me-template)

---

## Author Info

- Twitter - [@DavidMillerster](https://twitter.com/DavidMillerster)

[Back To The Top](#read-me-template)
