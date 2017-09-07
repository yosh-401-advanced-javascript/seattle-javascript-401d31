![cf](https://i.imgur.com/7v5ASc8.png) Lab 06: TCP Chat Server
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks  
For this assignment you will be building a TCP chatroom. Clients should be able to connect using a telnet client nickname them selfs and talk to each other. Clients should also be able to run special commands to quit, list users, reset their nickname, and send direct messages. You may add as many featrues to the chat as you would like. 

#### Minimum Requirements 
* Create a TCP Server using the NodeJS native `net` module
* Create a Client constructor that models an individual connection. 
  * Each client instance should contain at least an `id`, `nickname`, and `socket`.
* Clients should be able to send messages to one another
* Clients should be able to run special commands by sending messages that start with a command name
* Connected clients should be maintained in an in memory collection called the `clientPool`
  * When a socket emits the `close` event, the socket should be removed from the client pool
  * When a socket emits the `error` event, the error should be logged on the server
  * When a socket emits the `data` event, the data should be logged on the server and the commands below should be implemented

#### Required Client Commands
* `@quit` to disconnect
* `@list` should list all connectued users
* `@nickname <new-name>` should allow a user change their nickname
* `@dm <to-username> <message>` should allow a user to send a message directly to another user by nick name

##  Documentation  
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

Also write documention for starting your server and connection using tellnet. Write documentation for the chat room usage.

## Testing  
* no testing required for this lab - yay!
