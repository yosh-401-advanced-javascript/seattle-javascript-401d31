![cf](http://i.imgur.com/7v5ASc8.png) 13: Mongo and Express
=====================================

## MongoDB
  * **Overview**
    * **MongoDB** is a document based (noSQL) database
    * data is stored as a document with a series of key/value pairs
    * the data structure used to define a **MongoDB** document is referred to as `BSON` (which stands for Binary JSON)
    * you can install `mongoDB` through npm by running `npm install mongodb`
    * **MongoDB** runs as a daemon process and has an included shell client
      * **start the MongoDB process:** `mongod`
      * **start the MongoDB shell:** `mongo`

## Mongoose
  * **Overview**
    * **Mongoose** provides us with a schema based solution for modeling our application data
    * it provides us with helper methods, validation, query building, and logic hooks to speed up the development process
    * basic usage:
    ``` javascript
      const mongoose = require('mongoose');
      mongoose.connect(process.env.MONGODB_URI);

      var Note = mongoose.model('Note', { name: String });

      var note = new Note({ name: 'test note' });
      note.save(function(err) {
        if (err) return err;
        console.log('new note created!');
      });
    ```

## Mongo Shell Commands
  * **Commands**
