'use strict';

const Promise = require('bluebird')
const fs = require('fs')
Promise.promisifyAll(fs)

const startDir = process.argv[2]

walkDir(startDir)

function walkDir(dir){
  _walkDir(dir)
  function _walkDir(dir, pad){
    pad = pad || ''
  
    fs.readdirAsync(dir)
    .map( filename => {
      console.log(`${pad}${filename}`)
      return `${dir}/${filename}`
    })
    .map( pathname => {
      const stat = fs.statAsync(pathname)
      return Promise.join( stat, pathname, function(stat, pathname){
        return {
          stat
          , pathname
        }
      })
    })
    .each( data => {
      if (data.stat.isDirectory())
        _walkDir(data.pathname, pad + '  ')
    })
    .catch(console.error)
  }
}
