module.exports = function(db, app) {
  //Route to manage adding a product

  app.post('/api/checkvalidid', function(req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }
    user = req.body
    // console.log(user)
    const collection = db.collection('users')
    //check for duplicate id's
    collection.find({ id: user.id }).count((err, count) => {
      if (count == 0) {
        res.send({ success: 1, topnum: 0 })
      } else {
        //On send back highest used number.
        collection.find({}, { sort: { id: -1 }, limit: 1 }).toArray(function(err, items) {
          //   console.log(items[0].id)
          res.send({ success: 0, topnum: items[0].id })
        })
        //res.send({'success':0});
      }
    })
  })
}
