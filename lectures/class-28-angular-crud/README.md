401 JS -- class 33 AJAX and Image upload
=========================

## Image Upload Resources
* Read [ng-file-upload docs]
* Review [MIME wiki]

## Learning Objectives
* Students will be able to upload images to the backend server
* Students will be able to explain what when MIME types are used in HTTP requests

## Overview
### MIME Review
* MIME was originaly creadted for emails to be able to send non-text attachments
* The MIME specification has been adapted by HTTP to enable http cleints and servers to pass non-text data
* You know you are using the meme spec anytime you see a `Content-Type` header
* Some common Content-Types are
 * `text/plain`
 * `text/javascript`
 * `application/json`
 * `text/xml, application/xml`
 * `image/jpeg`
 * `image/gif`
 * `audio/mpeg`
 * `audio/basic`

### Crud Service
* We use angular services to create librarys for crud requests to our RESTful backend
* We must inject our auth serviee into a CRUD services so that there is a reliable way to get access to the users bearer token
* Crud Services can maintian state if they need to, for example when a Gallery service fetches all of a users galleries it may store them on the service. This is usefull if many controllers are going to need access to the same list of gallery data.

### Image uploads
* Unline most of ourt requtes file uploads require `Content-Type: multipart/form-data` 
* Angulars ng-model directive does not support input tags of `type="file"`
* ng-file-upload is a third party angular module that comes with diretives and services to help us upload files
* ng-file-upload suports single file upload, multi-file upload, drag and drop, and file type validation

<!--links -->
[ng-file-upload docs]: https://github.com/danialfarid/ng-file-upload
[MIME wiki]: https://en.wikipedia.org/wiki/MIME
