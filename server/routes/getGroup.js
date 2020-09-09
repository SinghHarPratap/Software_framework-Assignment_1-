module.exports = function(db, app, ObjectID) {
  //Route to get a single item

  app.post('/api/getgroup', function(req, res) {
    // console.log(req.body + 'id id ')
    if (!req.body) {
      return res.sendStatus(400)
    }

    id = req.body.id
    //Create objectID from passed in+id
    var objectid = new ObjectID(id)
    const collection = db.collection('groups')
    collection
      .find({ _id: objectid })
      .limit(1)
      .toArray((err, docs) => {
        //send to client and array of items limited to 1.
        console.log(docs)
        res.send(docs)
      })
  })
}
