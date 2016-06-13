'use strict'

const angular = require('angular')
const cowsay = require('cowsay-browser')
const lorem = require('lorem-ipsum')

const noteApp = angular.module('noteapp', [])
noteApp.controller('CowsayController', function(){
  this.cowsayFileList= []
  this.cowsayFile = 'default'
  this.cowsayText = 'Wish i had something better to say !'

  this.getAnimals = () => {
    cowsay.list((err, list) => {
      this.cowsayFileList = list
    })
  }

  this.loremify = () => {
    this.cowsayText = lorem({count: 4, units: 'words'})
  }

  this.say = (text) => {
    return '\n' + cowsay.say({text: text , f: this.cowsayFile}) 
  }
})
