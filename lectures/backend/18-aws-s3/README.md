![cf](http://i.imgur.com/7v5ASc8.png) 18: Image Uploads w/ AWS S3
===

## Resources
* read [multer docs](https://github.com/expressjs/multer)
* create [AWS account](https://aws.amazon.com/)

## Learning Objectives
* students will be able to upload static assets to AWS S3
* students will be able to retrieve a cdn url that contains the previously uploaded static asset
* students will be able to work with secret and public access keys

## AWS S3
Amazon Simple Storage Service (AWS S3) is simple but powerful cloud data storage solution. It can hold assets of any size. File assets can be uploaed to S3 Buckets. Buckets are essentialy file systems that can hold files and folders. In an S3 Bucket a filename is called a Key. Each asset in stored in a Bucket has a URI and specific permissions. If the asset has public read permisions anyone can retrieve the asset using a GET request. 

S3 is used for storing large data assets that databases can not handle. S3 is commonly used to host images, videos, audio, 3D models, CSV files, application files, binary executables, and much more. 
