'use strict'

const fs = require('fs-extra');
let superagent = require('superagent') 
const mongoose = require('mongoose');
mongoose.Promise = Promise
const Profile = require('../project/gallery/model/profile.js');
const User = require('../project/auth/model/user.js');
const Photo= require('../project/gallery/model/photo.js');
const loremIpsum = require('lorem-ipsum')

let imageDir = `${__dirname}/../assets/images`
const photoPaths = fs.readdirSync(imageDir).map(filename => `${imageDir}/${filename}`)

let users = [
  'bobby', 
  'sally',
  'zanbo',
  'happykid',
  'lulwat', 
  'yoloswaghax',
  'slugbyte',
  'snarf',
  'glorb',
  'clorb',
  'stringmonster',
  'cruzer',
  'pinkpop',
  'glitterkitty',
].map(name => ({
  username: name,
  email: `${name}@example.com`,
  password: 'password',
}))

// create account
console.log('populating gallery')
mongoose.connect('mongodb://localhost/dev')
.then(() => Promise.all([
  User.remove({}),
  Profile.remove({}),
  Photo.remove({}),
]))
.then(() => 
  Promise.all(users.map(user =>
    superagent.post('http://localhost:3000/api/auth/signup').send(user)))
    .then(responses => {
    return responses.map((res, i) => {
      let user = users[i];
      user.token = res.text;
      return user
    })
}))
.then( users => {
  return Promise.all(users.map((user, i) => 
    superagent.post('http://localhost:3000/api/gallery/profiles')
    .attach('photo', photoPaths[i])
    .set('Authorization', `Bearer ${user.token}`)
    .then(res => {
      user.profile = res.body
      return user
    })))
})
.then( users => {
  return Promise.all(users.map(user => {
    return Promise.all(photoPaths.map(path => {
      return superagent.post('http://localhost:3000/api/gallery/photos')
      .attach('photo', path)
      .field('description', loremIpsum())
      .set('Authorization', `Bearer ${user.token}`)
    }))
    .then(responses => {
      user.photos = responses.map(res => res.body)
      return user
    })
  }))
})
.then(() => console.log('success'))
.catch(console.error)
.then(() => process.exit())
