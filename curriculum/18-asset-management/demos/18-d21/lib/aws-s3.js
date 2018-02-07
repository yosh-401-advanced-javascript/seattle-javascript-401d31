'use strict'

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
AWS.config.setPromisesDependency(Promise)

const uploads = module.exports = {}

// Can this be refactored to not use an explicit promise return?
uploads.uploadProm = function(params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => err ? reject(err) : resolve(data))
  })
}

uploads.deleteProm = function(params) {
  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, data) =>
      err ? reject(err.stack) : resolve(data))
  })
}