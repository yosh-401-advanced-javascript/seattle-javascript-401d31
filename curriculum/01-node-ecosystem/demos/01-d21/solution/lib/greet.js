'use strict'

module.exports = name => {
  if(typeof name !== 'string') return null
  return name ? `Hello ${name}` : null
}