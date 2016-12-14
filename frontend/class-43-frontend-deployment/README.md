401 JS -- class 43 frontend deployment
===

## Heroku  Resources
* Review [heroku nodejs support]

## Cloud Front Resources
* Read [what is cloud front]
* Read [how cloud front works]
* Skim [content delivery network wiki]

## Learning Objectives
* Students will be able to explain the use case for distributing content on a CDN
* Students will be able to deploy dynamicly built frontend applications on heroku

## Overview
#### Content delivery networkDN
* CDN's are a way to distribute content globaly
* This comes in handy when you want users all over they world to be able to quicly access your website
* CDN's cash files by their name, so if you update a file you must clear the CDN cache so that it will re-retrieve it
 * A better way deal with with the problem of manging a CDN cash is to dynamicly name your files with a version number 
 or a random hash! This is considered a best pratice.

#### create a static server with redirects
* heroku doesnt server static files, so me must write a server to host our files
* we can also write redirect routes that map to our frontend routes
``` javascript
const express = require('express');
const morgan = require('morgan');
cosnt app = express();

app.use(morgan('common'));

// static server that serves client side
app.use(express.static(`${__dirname}/build`));

// example redirect
// app.get('/home', (req, res) => res.redirect('/#/home'));

const server = module.exports = app.listen(PORT , () => {
  console.log(`server up on ${PORT}`);
});
```

#### deploy app to heroku
* Create two apps in a pipeline on heroku
 * One for a staging 
 * One for production
* Add the folling npm script so that heroku will build your app for every deployment  
` "heroku-postbuild": "./node_modules/webpack/bin/webpack.js", `  
* Add the folling npm script so that heroku will start your static server  
` "start": "node server.js", `  
* In the staging app setup automatic deployment on push or merge to the master branch of your github repo
* Deployment to production will require manualy click a button on the pipleline 

#### setup aws cloud front
* Do the flowing steps twice, once for your staging app, once for your production app.
* Under the AWS Cloud Front console click **Create Distribution**
* Fill out the **Origin Domain Name** and **Origin ID** Fields
 * In both fill in the fully qualified domain name (aka. [fqdn]) of your heroku app, found on the settings tab of your heroku app. It should look like `staging-coolgram-frontend.herokuapp.com`
 * Scroll to the bottom of the page and click Create distribution
* inspect your cloud front distribution and copy the Domain name
 * add the env var AWS_CDN to your heroku app paste the AWS CDN domain name 
* Note it will take up to 30 minutes for the Cloud Front CDN to start working

#### configure webpack 
* Modify the webpack config to build all files with dynamc names so that you dont have to clear the CDN cache
* Modify the webpack config to 
``` javascript 
// dont replace your plugins config only change the ExtractTextPlugin
let plugins = [
  new ExtractTextPlugin('[hash].css'),
];

// dont replace your exports config only change the output property
module.exports = {
  output: {
    path: 'build',
    filename: '[hash].js',
    // In production we want webpack to prefix all URL's with the CDN URL
    publicPath: production ? process.env.AWS_CDN : undefined ,
  },
};
```

<!--links -->
[link name]: http://example.com 
[heroku nodejs support]: https://devcenter.heroku.com/articles/nodejs-support
[content delivery network wiki]: https://en.wikipedia.org/wiki/Contenttdelivery_network
[what is cloud front]: http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html
[how cloud front works]: http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html
[fqdn]: https://kb.iu.edu/d/aiuv
