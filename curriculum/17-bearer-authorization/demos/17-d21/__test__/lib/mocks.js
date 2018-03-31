'use strict'

const faker = require('faker')
const Auth = require('../../model/auth')
const Gallery = require('../../model/gallery')

const mocks = module.exports = {}
mocks.auth = {}
mocks.gallery = {}

mocks.auth.createOne = function() {
  let result = {}
  result.password = faker.internet.password()

  return new Auth({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  })
  .generatePasswordHash(result.password)
  .then(user => result.user = user)
  .then(user => user.generateToken())
  .then(token => result.token = token)
  .then(() => {
    // console.log(result)
    return result
  })
}

// mocks.gallery.createOne = function () {
  // let result = {}

  // return mocks.user.createOne()
  //   .then(userData => result = userData)
  //   .then(userData => {
  //     return new Gallery({
  //       name: faker.internet.domainWord(),
  //       desc: faker.random.words(12),
  //       userId: userData.user._id
  //     }).save()
  //   })
  //   .then(gallery => result.gallery = gallery)
// }

mocks.auth.removeAll = () => Promise.all([Auth.remove()])
mocks.gallery.removeAll = () => Promise.all([Gallery.remove()])
