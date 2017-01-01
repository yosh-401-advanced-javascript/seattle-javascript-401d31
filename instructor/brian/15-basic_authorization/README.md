![cf](http://i.imgur.com/7v5ASc8.png) 15: Basic Authorization
=====================================

## Continuous Integration
  * **Overview**
    * continuous integration (CI) is the concept of merging new code into a collaborative repository multiple times a day
    * CI tools, such as TravisCI, allow for a layer of automated software quality management (SQM)
    * CI tools provide a basic level of build automation by:
      * running our build processes
      * checking to ensure our build is working
      * checking to ensure that all of our tests have passed

  * **TravisCI**
    * [TravisCI](www.travisci.org)
    * TravisCI is a continuous integration tool that is highly configurable and easy to use
    * to enable a new repository to work with TravisCI, you simply need to:
      * create an account with TravisCI
      * enable the repository(s) you wish to use
      * create a `.travis.yml` file, which is used to configure your build **(see example file below)**
      * each time a pull request is made - navigate to Github and review the status of your build to ensure all checks have passed (using the built in TravisCI widget)

  * **Example: `.travis.yml`**
    ``` javascript
      language: node_js
      node_js:
        - 'stable'
      services:
        - mongodb
      addons:
        apt:
          sources:
            - ubuntu-toolchain-r-test
          packages:
            - gcc-4.8
            - g++-4.8
      env:
        - CXX=g++-4.8
      sudo: required
      before_script: npm i
      script:
        - npm run test
    ```

## Authorization & Authentication
  * **Authorization**
  * **Authentication**
  * **Basic Authorization**
