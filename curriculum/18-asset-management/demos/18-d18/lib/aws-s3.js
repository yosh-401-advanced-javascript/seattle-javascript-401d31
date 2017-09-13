'use strict'

const debug = require('debug')('cfgram:')

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
AWS.config.setPromisesDependency(require('bluebird'))

module.exports = function(params) {
  debug('#s3UploadProm')
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, s3Data) => {
      if(err) console.error(err)
      resolve(s3Data)
    })
  })
}
