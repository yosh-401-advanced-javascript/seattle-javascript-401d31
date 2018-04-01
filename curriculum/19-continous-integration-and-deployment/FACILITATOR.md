# Class 19

## How do I prep for today?
Time to deploy!  You'll need to have a solid understanding of the Heroku platform for enviornment, pipeline, and application creation, along with the use of TravisCI for continuous integration.  Create a few test apps, deploy them, and make sure you have that process down cold :).

## What changed from yesterday? 
Today, we add support for TravisCI and prepare their applications for deployment.  You'll be adding a `.travis.yml` file, a `.coveralls.yml` file (if you choose to use this for code coverage), and configuring TravisCI and Heroku to have to proper environment variables to build their apps.  Review the `package.json`, `.travis.yml`, and `.coveralls.yml` files in the demos for today to gain a better idea of how to configure.  TravisCI and Heroku constantly evolve, so you may need to modify these files to work with the constraints/dependencies of the application you've been building.

## What might students struggle with today? 
Students will get lots of "application error" pages showing up when deploying their applications.  Be sure to have them watch the build logs in Heroku for more info.  Generally, let students know that configuring and prepping your application for deployment can be time consuming and, at times, frustrating.  Taking the time to step through each part of the process slowly should help with this.

## What bugs, issues, or surprises have come up in the past for this class?
Apps may not get deployed correctly and/or TravisCI may constantly fail their tests or not run as expected!  Be ready to address these issues in lab!

### Configuring .env Variables in Travis
You may find `.env` variables aren't present when executing code in Travis.
Even trying to access something simple like `process.env.PORT` won't work.

This is because `.env` files aren't uploaded to Travis. They're ignored in the
repo.

Refer to Travis documentation to see how to set `.env` properties in the
`.travis.yml` file. It's redundant, but it works.

https://docs.travis-ci.com/user/environment-variables/

Notice the `&` in `node index.js &`. This script has Travis start the
server as background process. If you don't have the ampersand the server
will prevent the `npm test` command from being run. Travis automatically
kills the server once tests are complete.

There's no need for building `server.turnOn` and `server.turnOff`!

```
language: node_js
node_js:
  - 'stable'
before_script: npm i
services:
 - mongodb
env:
  PORT: 3001
  MONGODB_URI: mongodb://localhost/mymongodb
script:
  - node index.js &
  - npm test
```

### AWS Security
Tell students to pick especially strong AWS passwords. It's not enough to
simply delete AWS keys when they're no longer being used. It's possible for
attackers to find accounts, and brute-force passwords. If they brute-force
a password they'll have control over the account and can create keys to
exploit.

### Students Refusing to use AWS
Students may refuse to use AWS. Students might be scared that their credit card
will be charged thousands of dollars. This is actually a legitimate concern!

Unfortunately AWS doesn't support a way to limit spending on a credit card.
They support notifications to _tell_ you when it's being charged, but there's
no way to prevent it.

If students protest against using AWS simply allow them to complete every part
of the lab except anything interacting with AWS. Before they complain too much
about using AWS make sure they've done literally everything else in the lab.
Make sure they have express configured locally to accept uploaded files that
write to their local hard drive. Don't let them put the cart in front of the
horse!

Optionally, have them build the entire app, just without keys. Have them insert
the bit of code that uploads things to AWS and saves responses to the DB. Have
them configure a `sample.env` with properties with some default to-be-filled-in
values for `AWS_BUCKET`, `AWS_PUBLIC_KEY`, and `AWS_PRIVATE_KEY`. Have them
write the code with `s3.upload()` and everything too. If they want to test it
perhaps someone can lend them a bucket-name and keys momentarily, and revoke
the keys immediately after testing. Honestly, the funny thing here is since
students don't publish their public/private keys to their repo we don't
actually know if anyone has a real AWS account anyway!! How ironic.

## General comments
Students will also be presenting/selecting mid-quarter project ideas today!  Be sure to have a good process of project selection in mind and reach out to other instructors for their insight, if needed!

