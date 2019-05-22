# Facilitators Guide: API Server

## Learning Objectives

**Students will be able to ...**

* Manage the lifecycle of data model instances with pre and post hooks
* Extend classes and override methods in Javascript
* Use param middleware in express

## Preparation
The core takeaways from the day are introducing the students to
* Mongo Sub Documents
* Mongo Joins (populating using virtuals)
* Mongoose Pre and Post hooks (middleware)
* Parameterized API Routes

From a delivery standpoint, we will also be making our api more generic and using a dynamic parameter to pick the data model. Make sure you understand how the demo code works here.

* `/api/v1/:model/` - the model name is now in a param
  * `middleware/model-finder.js` - loads the right model file
    * `req.model` is now an instance of the right model, from the route, if it exists.
* You'll also be DRYing out the models today, so be well versed on classes and extension.

The demo shows each of the mongo modeling topics off in various ways, but this lecture is a good chance for the instructor to inject some real world use-cases into the discussion and inspire the students to really get in there and tinker.

Prepare for the day by tinkering a lot with setting up validations on schemas and doing interesting things pre and post save on the models.

Also, as with the previous day, we'll be writing tests with the Mongo in memory database, so be comfortable in how that spins up a virtual server while tests are running, and how it manages data state during testing.

## Lecture Main Topics & Overall Flow

### DRY up the code!
  * To this point, you have many (n) routes that all pretty much look the same
  * You also have many (n) models that all pretty much look the same.
  * We need to find some creative ways to DRY out the code where we can.
* Virtual model definition allows us to go down to 1 common route
  * Instead of many route files with `app.get('/api/v1/categories` and `app.get('/api/v1/products)`, we can use parameter middleware to clean that up.
  * `route.param('model', modelFinder)` will fire whenever a `:model` param is in a route.
  * that can allow us to fetch a **specified** model on the fly, rather than make many identical files.
  * DEMO!
* Extended Model Classes can help us clean up our models.
  * Imagine a world where you have 50 models like our products. They're all the same: A mongoose schema that is very specific, and the model class that has all of the REST style methods in it, that just calls the schema functions.
  * We could make a "mongo model" class that has those methods in it ...
  * And then for each actual model, they can simply extend that class and feed in their own schema.
  * Models become much smaller and easier to manage, and the interface is stable and only changes in that one file (the master class or interface), not every model
  * DEMO!

### Sub Documents vs Joins
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

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
