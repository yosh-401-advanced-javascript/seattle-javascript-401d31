![cf](http://i.imgur.com/7v5ASc8.png) 14: Mongo/Express 2 Resource API
===

## Resources
* read [mongoose populate docs](http://mongoosejs.com/docs/populate.html)
* skim [mongoose api docs](http://mongoosejs.com/docs/api.html)

## Learning Objectives
* students will be able to create a 2 resource MongoDB and Express API
* students will be able to reference additional resources as part of their mongoose.js based data models
* students will be able to use the `populate` method to allow for resource query population

## Model Relationships
When the modeling real world as data you will quickly discover that data has relationships to other data. Infact in the real world it is rare, if not impossible, for something to exist that has no relationships to other things. On the other hand in theretical world we can describe a thing with out describing its relationships to other things. Software enginers have discoverd useful ways to discribe the relationships (or lack of) between data that can easily be maped to a database. 

#### One 
A Model that stands on its own. A web app example includes a simple Note that has no relationship with any other model, It contains all the data it needs.

```
Note
  id: 1
  content 'get milk and cookies.'
```

#### One to One
When a Model Foo that is related to a sigle Model Bar. Some web app examples include every user having a single profile, every profile having a single profile photo, every client is limited to a single contact email. 

```
User 
  id: 888
  username: slugbyte
  profileID: 123

Profile 
  id: 123
  bio: 'i love javascript'
  url: 'www.codefellows.com'
  userID: 888
```

#### One to Many
A Model Foo that is realted to many Bar Models. Some web app examples include every user having may posts but posts have a singe user, every photo having many comments but each comment is to a single photo, every post having many likes but each like is to a single post.

```
Photo
  id: 5678
  url: 'www.example.com/image/sunset.jpg'
  comments: [ 44 65 78 ]

Comment
  id: 44
  content: 'SO MUCH BEAUTY! <3'

Comment
  id: 65
  content: 'awesome photo'
  
Comment
  id: 78
  content: 'LUL, look at the clouds'
```
  
  
#### Many to Many
Many Foo modles that can each have relationships to many Bar Models. a web app examples includes every user having a relation ship with many friends and each of those users have relationships with a many different freinds. 

