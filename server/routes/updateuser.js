module.exports = function(db, app, ObjectID) {
  // db.collection('products').update({ id: 1 }, { $set: { name: 'New Product' } })

  //Route to delete a single item
  var result
  app.post('/api/update', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    user = req.body
    //console.log(req);
    var objectid = new ObjectID(user.objid)
    const collection = db.collection('users')
    collection.updateOne(
      { _id: objectid },
      {
        $set: {
          name: user.name,
          age: user.age,
          role: user.role,
          groupadmin: user.groupadmin
        }
      },
      () => {
        //Return a response to the client to let them know the delete was successful
        res.send({ ok: user.objid })
      }
    )
  })
}
