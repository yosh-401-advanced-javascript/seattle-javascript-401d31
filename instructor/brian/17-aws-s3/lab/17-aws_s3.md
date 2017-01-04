![cf](https://i.imgur.com/7v5ASc8.png) Lab 17 - AWS S3
======

## To Submit this Assignment
  * create a new branch off of the branch that you created yesterday (lab-16)
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `package.json`
  * `.eslintrc`
  * `gulpfile.js`
  * `.gitignore`
  * `README.md`

## Description
  * Create an AWS account
  * Create an AWS Access Key and Secret
    * add the Access Key and Secret to your `.env` file
  * Create a new model that represents a file type that you want to store on AWS S3
    * ex: `.mp3`, `.mp4`, `.png`, etc
  * Create a test that uploads one of these files to your route
  * Use the `aws-sdk` to assist with uploading
  * Use `multer` to parse the file upload request

## Server Endpoint
  * `POST` - `/api/resource/:resourceID/new-resource`

## Tests
  * `POST` - **200** - create a series of basic tests to ensure that uploads work as expected

## Bonus
* 1pt - Create a **DELETE** route that will remove an object from an S3 bucket
* 1pt - Create a test that checks to ensure the object was properly deleted
