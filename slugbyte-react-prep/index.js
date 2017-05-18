#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const childProcess = require('child_process')

const paths = {
  config: `${__dirname}/backend/public/config.json`,
  public: `${__dirname}/backend/public`,
  frontend: `${__dirname}/frontend`,
}


let promisify = fn => (...args) => 
  new Promise((resolve, reject) => 
    fn(...args, (err, ...data) => err ? reject(err) : resolve(...data)))

let configLoad = () => Promise.resolve(require(paths.config))

let configUpdate = name => config => {
    config.apps = Array.from(new Set(config.apps).add(name))
    return Promise.resolve(config)
}

let configSave = (config) => 
  promisify(fs.writeFile)(paths.config, JSON.stringify(config))

let userInput = {
  cmd: process.argv[2] || 'help',
  args: process.argv.slice(3),
}

let frontendFetchProjects = () => fs.readdir(paths.frontend)

let frontendExitsts = (name) => 
  fs.stat(`${__dirname}/frontend/${name}`)

let frontendBuild = (name) =>  
  promisify(childProcess.exec)(`cd ${paths.frontend}/${name};npm i; npm run build`)

let buildMoveToPublic = (name) => 
  fs.move(`${paths.frontend}/${name}/build`, `${paths.public}/${name}`, {overwrite: true})

let publicConfigure = (name) => 
  configLoad().then(configUpdate(name)).then(configSave)

let routes = {}

routes.help = () => Promise.resolve(console.log(`options:
  - build: builds a frontend and mv's to public
      $ ./index.js build kanban 
  - help: print a help menu`))

routes.build = (project) => {
  console.log('project', project)
  if(project === 'all')
    return frontendFetchProjects().then(projects => Promise.all(projects.map(routes.build)))
  return frontendExitsts(project)
  .catch(() => {throw `project ${project} does not exist`})
  .then(() => frontendBuild(project))
  .then(() => buildMoveToPublic(project))
  .then(() => publicConfigure(project))
  .catch(console.error)
}

routes.list = () => fs.readdir(paths.frontend).then(dirs => console.log('projects \n  * ' +  dirs.join('\n  * ')))

// start progress bar
setInterval(() => process.stdout.write('.'), 500)

// run route code
let route
if(route = routes[userInput.cmd])
  route.apply(null, userInput.args)
  .then(() => {
    console.log('')
    process.exit(0)
  })
else 
  routes.help()
  .then(() => {
    console.log('')
    process.exit(0)
  })


