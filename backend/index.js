const { Server } = require("socket.io");

const io = new Server(4000, {
  path: "/notifications",
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

io.on("connection", (socket) => {
  socket.on("notification", (...props) => {
    console.log("notification", ...props);
    socket.broadcast.emit("notify", ...props);
  });
});
