![cf](http://i.imgur.com/7v5ASc8.png) API Server
================================================

## Learning Objectives

**Students will be able to ...**

* Manage the lifecycle of data model instances with pre and post hooks
* Extend classes and override methods in Javascript
* Use param middleware in express

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts**
* :20 **Code Review**
* Break
* :60 **Mongo Advanced Modeling**

## Computer Science Concept:

## UI Concept:

## Main Topic: Mongo "Joins"

**Sub Documents, "Joins" with Populate, "Joins" with Virtual Fields**

  * Sub Documents are great for supportive data such as comments on a blog post
  * Joins are great for linking common/shared data such as players and baseball teams
* Note that noSQL Databases don't really join, and doing so generally is considered an anti-pattern. Ensure that you're modeling things in the most logical way for this data store.
* `populate()` is a method we can use in Mongoose to connect 2 collections
  * Method 1: physically joining using a reference to another collection
  * Method 2: Virtual Population
    * Create a virtual field in a document pointed to a field in another one.
    * In `pre('find')` you do a collection "on the fly" which can be more efficient than storing the relation.
* Pre and Post hooks (middleware)
  * Mongoose allows you to inject logic at various points in the lifecycle of a data record.
    * User can perform validation, normalization
    
    
#### Subdocuments [docs](https://mongoosejs.com/docs/subdocs.html)
```
var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema],
  
  // Single nested subdocuments.
  child: childSchema
});
```

#### Direct Population (References)
Create a reference column in the collection and then when you save, you need to `push()` into the reference field with the _id of the referenced document.  This results in quicker `find()` but requires a lot more management on saves, updates, deletes.

```
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
```

#### Virtual Joins

In this example, we create a virtual field in teams called "players" by connecting them with named fields, and then doing a populate as we find/load documents.
```
const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  this.populate('players');
});

```
