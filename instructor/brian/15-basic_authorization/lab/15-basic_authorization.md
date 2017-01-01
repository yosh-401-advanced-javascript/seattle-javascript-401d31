![cf](https://i.imgur.com/7v5ASc8.png) Lab 15 - Basic Authorization
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `package.json`
  * `.eslintrc`
  * `gulpfile.js`
  * `.gitignore`
  * `.env` - **add this to your `.gitignore` file**
  * `README.md`

## Description
  * Create the following directories to organize your code:
    * **lib**
    * **model**
    * **route**
    * **test**
  * Create an HTTP server using `express`
  * Using `mongoose`, create a **User model** with the following properties and options:
    * `username` - *required and unique*
    * `email` - *required and unique*
    * `password` - *required*
    * `findHash` - *unique*
    * **Note:** the user must **never** contain a password that is stored as plain text *(be sure to hash the password)*
  * Create a basic authorization middleware component that will be used to parse **basic** authorization headers
  * Use the **npm** `debug` module to log function calls that are used within your application
  * Use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**
  * Use the **npm** `dotenv` module to house the following environment variables:
    * `PORT` - *used for setting up the port that your server will listen on*
    * `MONGODB_URI` - *used for setting up the URI that mongoose will use to connect to a database*
    * `APP_SECRET` - *used for signing and verify tokens*

## Server Endpoints
### `/api/signup`
* `POST` request
  * the client should pass the username and password in the body of the request
  * the server should respond with a token *(generated using `jwt` and `findHash`*
  * the server should respond with `400 Bad Request` to a failed request

### `/api/signin`
* `GET` request
  * the client should pass the username and password to the server using a _Basic_ authorization header
  * the server should respond with a token for authenticated users
  * the server should respond with `401 Unauthorized` for non-authenticated users

## Tests
* Create a test that will ensure that your API returns a status code of `404` for any routes that have not been registered
* `/api/signup`
  * `POST` - test `400`, if no request body has been provided or the body is invalid
  * `POST` - test `200`, responds with a token if the body is valid *(just check for the proper the status code, not the actual token characters)*
* `/api/signin`
 * `GET` - test `401`, if the user could not be authenticated
 * `GET` - test `200`, responds with token for a request with a valid basic authorization header
