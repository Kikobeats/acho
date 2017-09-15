'use strict'

const acho = require('acho')

const log = acho()
const types = Object.keys(log.types)
types.forEach(type => {
  log[type]('hello world')
})
