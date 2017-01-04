![cf](http://i.imgur.com/7v5ASc8.png) 17: AWS S3
=====================================

## AWS S3
  * **Overview**
    * S3 *(Amazon Simple Storage Service)* is scalable object storage platform
      * we'll be using S3 as a way to store images used within our application
    * when uploading files to S3, each file is considered an object
    * objects (aka files) are contained in custom buckets that we create
  
## Helpers
  * **`.env` config**
  ``` javascript
    PORT='8000'
    MONGODB_URI='mongodb://localhost/yourdbname'
    APP_SECRET='yourdbsecret'
    AWS_BUCKET='yourbucketname'
    AWS_ACCESS_KEY_ID='youraccesskey'
    AWS_SECRET_ACCESS_KEY='yoursecretkey'
  ```
  
  * **newly added `npm` modules**
    * `multer` - used for handling multipart form data (`entype="multipart/form-data"`)
    * `del` - deletes files and folders
    * `aws-sdk` - official sdk (software development kit) with helper tools for working with AWS
