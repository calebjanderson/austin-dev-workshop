var express = require('express')

var robotParts = {
  arms: function(req, res, next) {
    req.robot.arms = true
    console.log('Added arms')
    next()
  },
  legs: function(req, res, next) {
    req.robot.legs = true
    console.log('Added legs')
    next()
  },
  head: function(req, res, next) {
    req.robot.head = true
    console.log('Added head')
    next()
  },
  torso: function(req, res, next) {
    req.robot = {}
    console.log('Added torso')
    next()
  }
}



var app = express()






app.get('/robot',
  robotParts.torso,
  robotParts.head,
  robotParts.arms,
  robotParts.legs,
  function(req, res) {
    console.log('The finished product!: ', req.robot)
    res.json(req.robot)
  })


app.listen(4040, function() { console.log('Listening on port 4040')})

