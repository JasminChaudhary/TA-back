const router = require('express').Router()
//require schema
let User = require('../models/user.model')

//first endpoint - handles incoming HTTP GET requests
//root url
router.route('/').get((req, res) => {
  User.find() //mongoose method
    .then((users) => res.json(users)) //returns a promise json
    .catch((err) => res.status(400).json('Error: ' + err))
})

//2nd endpoint - handles incoming post request
router.route('/add').post((req, res) => {
  const username = req.body.username
  //create new instance
  const newUser = new User({ username })
  //save to the database
  newUser
    .save()
    .then(() => res.json('User Added!'))
    .catch((err) => res.status(400).json('Error' + err))
})

module.exports = router
