![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 401 JS -- Class 28
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to conceptually break pages down into components
* Students will be able to create and render stateful React components

## Resources  
* Students will learn how to setup a react project using webpack
* Students will be able to conceptually break pages down into components
* Students will be able to create and render stateful React components

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, etc that are required -->
Your lab directory must include  
* **README.md** -- with a documentation about your lab
* **.gitignore** -- with a robust gitignore
  * make sure to ignore .env, node_modules, and build when applicable
* **.eslintignore** -- with the class .eslintignore
* **.eslintrc** -- with the class .eslintrc file
* **.babelrc**
* **.webpack.config.js** 
* **.package.json** -- with all dependencies and dev-dependencies
* **src/** -- a lib direcotry for your client code
  * **main.js**
  *  component/
  * **style/**
    * **main.scss**
    * **_reset.scss**
    * **_vars.scss**
    * **_base.scss**
    * **_module.scss**
    * **_layout.scss**
* **test/** -- a test directory for holding your unit tests

#### Feature Tasks  
* Create a Multi File react app with the following components
* An App component that contains your entire application state
* The app should have two routes for `/` and `/dashboard`
###### `/` 
* Create a BudgetCreateForm component in the componet dir that makes an ajax request to the backend to create a budget profile
* Create a SelectBudgetForm that will allow a use to select a previous buget
* upon creation or selection of a budget the app should redirect to /dashboard
###### `/dashboard`
* this component should have a DashboardHeader component that shows the title and budget amount of the slected dashboard



####  Documentation  
* document your process for designing the state of the application and the methods for modifying it
* document your note model
* document you application's element tree

## Rubric  
* 2pts Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
