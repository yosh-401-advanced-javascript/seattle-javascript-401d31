![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - Socket.io Pub/Sub
==================================================================

[Solution Sandbox](https://codesandbox.io/s/61v3r7oj5k)

Students will be begin by forking a [starter sandbox](https://codesandbox.io/s/z6mpqy858m)

They will be required to connect many separate pieces in this lab:

* A Q Server, deployed at Heroku
  * Should open a queue called "database"
  * Should monitor "create", "update", "delete" events
  
* An API Server, deployed at Heroku
  * Must connect to the deployed Heroku server
  * Must publish an event to it on "create", "update", "delete" on the models, with a payload that shows the event, model, and _id
  
* A react application that also connects to the Q server and listens for those same events

The gist of this lab is to create a DB Dashboard that changes whenever the database changes.

They will likely spend most of the day getting to proof of life. Press them to get there quickly (the demo does most of that) so that they can focus on the UX.

Refer to the Guide Repo `apps-and-libraries` -- this section of the repo contains a fully working and deployable API and Q server that will work with this lab. If students are stuck, you can use that as a north star to help guide them through it.

If you desire, you may deploy create your own GIT Repos and deploy these on your own and give them to the class so that they can totally focus on the React side of this.

---

**To get this all working you (and the students) need to setup a mongo db at Heroku, and set the Q_SERVER environment variable on the API Server's settings to point to the Q Server that you deploy separately. This is the connection. That same Q server URL will then be used on the React App.**


