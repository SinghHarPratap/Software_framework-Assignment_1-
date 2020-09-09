var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var bodyParser = require('body-parser')
var cors = require('cors')
var fs = require('fs')

const io = require('socket.io')(http)
const sockets = require('./socket')
const MongoClient = require('mongodb').MongoClient // require MongoClient functionality
var ObjectID = require('mongodb').ObjectID //require ObjectID functionality
const server = require('./listen.js')
const PORT = 3000
server.listen(http, PORT)

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist/ChatroomAssignment/')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url = 'mongodb://localhost:27017'
MongoClient.connect(
  url,
  { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    //Callback function code. When we have a connection start the rest of the app.
    if (err) {
      return console.log(err)
    }
    const dbName = 'mydb'
    const db = client.db(dbName)
    sockets.connect(app, io)
    require('./routes/login.js')(db, app)
    require('./routes/userdata.js')(db, app)
    require('./routes/createUser')(db, app)
    require('./routes/uservalid.js')(db, app)
    require('./routes/getusers.js')(db, app)
    require('./routes/deleteItem.js')(db, app, ObjectID)
    require('./routes/updateuser.js')(db, app, ObjectID)
    require('./routes/getuser.js')(db, app, ObjectID)
    require('./routes/showgroup.js')(db, app)
    require('./routes/groupvalid.js')(db, app)
    require('./routes/createGroup.js')(db, app)
    require('./routes/deletegroup.js')(db, app, ObjectID)
    require('./routes/addmember.js')(db, app)
    require('./routes/deleteMember.js')(db, app, ObjectID)
    require('./routes/getGroup.js')(db, app, ObjectID)
    require('./routes/crateChannel.js')(db, app)
    require('./routes/deleteChannel.js')(db, app, ObjectID)
    require('./routes/deleteChannelMember.js')(db, app, ObjectID)
    require('./routes/addChannelMember.js')(db, app, ObjectID)
    require('./routes/showChannel')(db, app)
    //Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
    // require('./listen.js')(http)
  }
)
module.exports = app
