![cf](http://i.imgur.com/7v5ASc8.png) 34: Budget Tracker
===

## Submission Instructions
  * continue working on the fork you created from lab-31
  * make a **new branch** and create a **new pull request** on github
  * submit a link to your PR in canvas

## Requirements  
#### Feature Tasks 
* complete the Lab 31, 32, and 33 tasks

##### SCSS
Style the application using sass best practices  
 * Create a _reset.scss _vars.scss and _base.scss
 * style your components 

##### Components
* add and refactor the following components and organize them according to the following tree
``` 
App
  Provider 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of CategoryItems
           Dropzone
             CategoryForm  -- for updating categories
             ExpenseForm -- for creating expenses
             [ExpenseItem]  -- list of ExpenseItems
                Draggable 
                  ExpenseForm -- for updating an expense
```
###### Draggable
  * Create a component that enables users to drag its children
  * It stores data passed into its `dataTransferItem` prop on the event handler for `onDragStart`
    * data should be stored as json under the MIME 'application/json'

###### Droppable 
  * Create a component that enables users to drop a Draggable component
  * onDrop it should invoke a callback with the data passed using the events dataTransferObject
    * remember to parse the json 

###### ExpenseItem
  * Wrap the contents of the ExpenseItem in a Draggable 
  * Pass the expense data into the Draggables dataTransferItem prop

###### CategoryItem
  * Wrap the contents of a CategoryItem in a dropzone 
  * When the onComplete of a dropzone is fired update the expense so that it appears on the correct category

#### Test
  * Test every component except app
  * Test all of your action creators
  * Test each reducer used in your apps combineReducers
    * test that the validation is working!

####  Documentation  
Write a description of the project in your README.md
