module.exports = function(db, app) {
  app.post('/api/auth', function(req, res) {
    // console.log(req.body)
    if (!req.body) {
      return res.sendStatus(400)
    }

    username = req.body.username
    password = req.body.pwd
    const collection = db.collection('users')
    //check for duplicate id's
    collection.find({ username: username, pwd: password }).count(function(err, count) {
      if (count > 0) {
        res.send({ username: username, success: true })
        console.log(username, password)
        // console.log(req.body)
      } else {
        res.send({ username: '', success: false })
      }
    })
  })
}
