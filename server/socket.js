module.exports = {
  connect: function(app, io) {
    // console.log(io)
    var rooms = []
    var socketRoom = []
    var socketRoomnum = []

    const chat = io.of('/chat')
    // var chat = io.of('/chat')

    chat.on('connection', socket => {
      socket.on('message', message => {
        for (i = 0; i < socketRoom.length; i++) {
          if (socketRoom[i][0] == socket.id) {
            chat.to(socketRoom[i][1]).emit('message', message)
          }
        }
      })

      socket.on('newroom', newroom => {
        if (rooms.indexOf(newroom) == -1) {
          rooms.push(newroom)
          chat.emit('roomlist', JSON.stringify(rooms))
        }
      })

      socket.on('roomlist', m => {
        chat.emit('roomlist', JSON.stringify(rooms))
      })

      socket.on('numusers', room => {
        var usercount = 0

        for (i = 0; i < socketRoomnum.length; i++) {
          if (socketRoomnum[i][0] == room) {
            usercount = socketRoomnum[i][1]
          }
        }
        chat.in(room).emit('numusers', usercount)
      })

      socket.on('joinRoom', room => {
        socket.join(room, () => {
          var inroomSocketarray = false

          for (i = 0; i < socketRoom.length; i++) {
            if (socketRoom[i][0] == socket.id) {
              socketRoom[i][1] = room
              inroom = true
            }
          }
          if (inroomSocketarray == false) {
            socketRoom.push([socket.id, room])
            var hasroomnum = false

            for (let j = 0; j < socketRoomnum.length; j++) {
              if (socketRoomnum[j][0] == room) {
                socketRoomnum[j][1] = socketRoomnum[j][1] + 1
                hasroomnum = true
              }
            }

            if (hasroomnum == false) {
              socketRoomnum.push([room, 1])
            }
          }
          chat.in(room).emit('notice', 'A New User Has Joined')
        })
        return chat.in(room).emit('joined', room)
      })

      socket.on('leaveRoom', room => {
        for (let i = 0; i < socketRoom.length; i++) {
          if (socketRoom[i][0] == socket.id) {
            socketRoom.splice(i, 1)
            socket.leave(room)
            chat.to(room).emit('notice', 'A User Has Left')
          }
        }
        for (let j = 0; j < socketRoomnum.length; j++) {
          if (socketRoomnum[j][0] == room) {
            socketRoomnum[j][1] = socketRoomnum[j][1] - 1
            if (socketRoomnum[j][1] == 0) {
              socketRoomnum.splice(j, 1)
            }
          }
        }
      })

      socket.on('disconnect', () => {
        chat.emit('disconnect')
        for (let i = 0; i < socketRoom.length; i++) {
          if (socketRoom[i][0] == socket.id) {
            socketRoom.splice(i, 1)
          }
        }
        for (let j = 0; j < socketRoomnum.length; j++) {
          if (socketRoomnum[j][0] == socket.room) {
            socketRoomnum[j][1] = socketRoomnum[j][1] - 1
          }
        }
        console.log('Client Disconnected')
      })
    })
  }
}
