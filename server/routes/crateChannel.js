module.exports = function(db, app) {
  app.post('/createchannel', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    newUser = req.body
    const collection = db.collection('groups')
    //check for duplicate id's
    collection.update(
      { group_name: req.body.group_name },
      { $addToSet: { channel: { channel_name: req.body.channel_name } } }
    )
    //check for duplicate id's
  })
}
