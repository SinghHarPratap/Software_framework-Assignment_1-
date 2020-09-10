module.exports = function(db, app) {
  app.post('/createGroup', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }

    newgroup = req.body
    group_name = req.body.group_name
    const collection = db.collection('groups')
    //check for duplicate id's
    collection.find({ group_name: group_name }).count((err, count) => {
      if (count == 0) {
        //if no duplicate
        collection.insertOne(newgroup, (err, dbres) => {
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
