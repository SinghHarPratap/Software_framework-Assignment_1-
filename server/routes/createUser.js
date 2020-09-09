module.exports = function(db, app) {
  app.post('/createUser', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    newUser = req.body
    username = req.body.name
    const collection = db.collection('users')
    //check for duplicate id's
    collection.find({ username: username }).count((err, count) => {
      if (count == 0) {
        //if no duplicate
        collection.insertOne(newUser, (err, dbres) => {
          if (err) throw err
          let num = dbres.insertedCount
          //send back to client number of items instered and no error message
          res.send({ num: num, err: null })
        })
      } else {
        //On Error send back error message
        res.send({ num: 0, err: 'duplicate item' })
      }
    })
    //check for duplicate id's
  })
}
