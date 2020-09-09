module.exports = function(db, app, ObjectID) {
  app.post('/deleteMember', function(req, res) {
    console.log(req.body)
    if (!req.body) {
      return res.sendStatus(400)
    }

    group = req.body
    const collection = db.collection('groups')
    collection.update(
      { group_name: group.group_name },
      { $pull: { members: group.members } },
      function(err, valid) {
        if (valid.result.nModified == 1) {
          res.send({ removed: true })
        } else {
          res.send({ removed: false })
        }
      }
    )
  })
}
