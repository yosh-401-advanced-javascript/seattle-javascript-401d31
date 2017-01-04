401 JS --  Lab num topic
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
<!-- the leaning objectives from the corisponding class number --> 
## Resources  
<!-- a list of liks if any are necessary for the assignment--> 
## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, ect that are required -->
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies 
* **assets/**  -- directory for holding image files
* **test/**  -- directory for holding unit and integration tests
* **lib/**  -- directory for holding program helper modules
* **model/**  -- directory for holding object constructor modules
* **server.js** --  main server program
 
#### Feature Tasks  
* Create a **server.js** that start a TCP server using the `net` module
* Create a **lib/client-pool.js** module for keeping track of client connections
 * create a `broadcast` method for sending a message to every cleint
 * create a `directMessage` method for send a message to a single clinet
 * create a `nick` method for adding a nickname to a client
* create a **lib/parse-message.js** module for parsing client request
 * if a client sends a message that starts with `\nick some_name` 
   * change thier nickname to the name they have provided
 * if a client sends a message that starts with `\dm some_name some message`
   * send thier message to the client with the some_name nickname
 * otherwise broadcast thier message to all clients
* when a user speaks their nickname should be printed
 * **i.e.** `teapot: Sup Hacker?`

####  Documentation  
* Write a project description in your **README.md**
* Write docs on how to connect to your server with telnet

#### Testing  
*  No Testing Today :)

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
