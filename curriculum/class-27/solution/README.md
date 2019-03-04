![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Component Based UI
===================================================================

[Lab Solution](https://codesandbox.io/s/9894jnq4vr)

### Tests
First, the students will need to a full TDD round at Code Sandbox.  This will involve getting a setupTests.js file up and running in the src folder, and a series of tests that are written with the correct assertions:

* Is state correct when we count up or down?
* Is polarity correct when we are not-zero?
* Is the rendered output correctly matched to state.

Once they've gotten the tests running, the next step is to start down the CI/CD road.

### Travis Hookup
* They must create a new repository at GitHub
* Either pull down the sandbox into that cloned repo, or connect it
* Confirm that all tests are green locally
* Add a proper .travis.yml file (take out the lint command)
* Check into master
* Confirm that all tests are green in Travis

### AWS Bucket Deployment
* Create a bucket
* Give it wide open permissions
* Set it up as a static website
* Upload to S3

### AWS Automatic Deployment
* They'll need to complete the aws.yml file and upload it to cloud formation
* This should hook up automatically to a domain (taks @ :30)

## Watch Out For:
* Make sure they have aws.yml in their .gitignore, since it contains their github access token.
* Make sure their .travis.yml file is correct - proper node version, only has to run `npm test`