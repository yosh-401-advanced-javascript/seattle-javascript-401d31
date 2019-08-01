# Solution: Express Routing & Connected API

## Lab Requirements

### Grading Standards & Notes
  * Features
    * Class based data models
    * All REST endpoints must be supported
      * Use the /api/v1 prefix
    * Model methods should match the api verbs
    * Proper modularization
  * Code Quality
    * Separate Schema
    * Common interface between the models
    * Same data contract for all
  * Testing
    * Models must be tested independently
    * Server routes must be fully tested with supergoose
  * Deployment
    * Travis for tests
    * Heroku for the API
  * Documentation
    * README Standards 
    * JSDoc Required
    * Swagger for the API
    
### Lab Assistance Notes

#### APIs
Notice in both API's, we are requiring in the model and then calling what look like REST methods (see below). We do this to keep things looking the same and being obvious between the api and the models. 

api/products.js

```
const products = new Products();

...

router.post('/api/v1/products', postProduct); 

...

function postProduct(request,response,next) {
  products.post(request.body)
}
```

#### Models
In order for those APIs to work, the models need to all have the same interface, whether they are mongo or memory

You can see that the products model is a class that has all of those nice rest methods 

categories.js follows the same pattern.

Both products and categories return the same type of data (arrays or single objects), in a promise. This makes them easily swappable.

As far as the APIs are concerned, those are the same. It doesn't care if the models are memory, mongo, or postgres.  So long as they have the `.get()`, `.post()`, etc methods, they'll always work with the APIs and we can always swap them out!




