module.exports = function(db, app) {
  app.post('/addmember', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    newgroup = req.body
    group_name = req.body.group_name
    const collection = db.collection('groups')
    //check for duplicate id's

    collection.update(
      { group_name: newgroup.group_name },
      { $addToSet: { members: newgroup.username } },
      function(err, match) {
        if (match.result.nModified == 0) {
          res.send({ match: true })
        } else {
          res.send({ match: false })
        }
      }
    )
  })
}
