# LAB

## Buffers - Bitmap Transformer

### Author: Student Names

### Links and Resources
![Build Status](https://api.travis-ci.com/beccalee123/05-project-bl-and-hi.svg?branch=master)

* [PR](https://github.com/)


###### Usage Notes or examples
From terminal run node. Enter in two arugments into the command line: 
1. a bitmap image
2. a transformation you would like to see. 

**Format: node index.js ../pathtofile/name.bmp transformation**
Example: `node index.js ../assets/baldy.bmp skew`

### Modules
##### We made modues for 6 different transformation modules:
* barstransform.js (transformation: 'behind-bars')
* colortransform.js (transformation: 'yellow' or 'green')
* diagonal.js   (transformation: 'skew')
* xtransform.js (transformation: 'flip-left-right)
* ytransform.js (transformation: 'upside-down')


### Setup
#### `.env` requirements
* npm i 
* Node modules in package.json: fs, util

#### Running the app
* Backend app that runs via the command line in the terminal
* See usage notes for run details

#### Tests
* How do you run tests? We use jest and eslint
  * npm run test
  * npm run lint
* What assertions were made? 
* * accurately mutate matrix
* * accurately mutate color array buffer 

