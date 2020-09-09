module.exports = function(db, app, ObjectID) {
  app.post('/api/deleteitem', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }

    userId = req.body.id
    //create a new mongo Object ID from the passed in _id
    var objectid = new ObjectID(userId)
    const collection = db.collection('users')
    //Delete a single item based on its unique ID.
    collection.deleteOne({ _id: objectid }, (err, docs) => {
      //get a new listing of all items in the database and return to client.
      //  collection.find({}).toArray((err,data)=>{
      //console.log('data' + data);
      //   res.send(data);
      // });
      res.send({ ok: 1 })
    })
  })
}
