const { runServer } = require('./index');

const express = require("express");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const { declareDatabaseRoutes } = require("./api/declareUserRoutes");
const { declareMatchRoutes } = require("./api/declareMatchRoutes")

const app = express();

app.promiseListen = function promiseListen(port, host) {
  return new Promise((resolve, reject) =>
    this.listen(port, host, (err) => (!err ? resolve() : reject(err)))
  );
};

const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

declareDatabaseRoutes(app);
declareMatchRoutes(app);

io.on('connection', socket => {
    console.log("new user")
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    console.log("jion room" + userId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', (userId) => {
        console.log("left")
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(PORT);

















