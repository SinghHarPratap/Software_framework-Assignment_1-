module.exports = function(db, app, ObjectID) {
  // var myquery = { id: 3 };
  // db.collection("products").deleteOne(myquery);

  //Route to delete a single item

  app.post('/api/deleteChannelMember', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    newUser = req.body
    const collection = db.collection('groups')
    //check for duplicate id's
    collection.findOneAndUpdate(
      { group_name: req.body.group_name, 'channel.channel_name': req.body.channel_name },
      { $pull: { 'channel.$.channel_members': req.body.channel_member } }
    )
    //check for duplicate id's
  })
}
