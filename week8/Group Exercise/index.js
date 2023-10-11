const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const { faker } = require("@faker-js/faker");
let users = {};

const port = 3000;

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // generate a fake name
  const username = faker.person.firstName();

  // update users
  users[socket.id] = username;

  // server emit event to only one client to set name
  socket.emit("welcome", username);

  // server notifies all clients with the updated list of users
  io.emit("users", users);

  // server notifies all clients that there is a new user
  io.emit("join", username);

  // each client send a message
  // each client send a message
  socket.on("chat", (to, msg) => {
    // if 'to' is "all", broadcast message to all clients
    if (to === "all") {
      io.emit("sendMsg", `${username} to all`, msg);
    } else {
      // find recipient socket id
      let recipientSocketId = Object.keys(users).find((id) => users[id] === to);

      if (recipientSocketId) {
        // server sends message to the recipient and the sender only
        io.to(recipientSocketId).emit("sendMsg", `${username} to ${to}`, msg);
        socket.emit("sendMsg", `${username} to ${to}`, msg);
      } else {
        // if recipient not found, send error message back to sender
        socket.emit("sendMsg", "System", `Người dùng ${to} không tìm thấy`);
      }
    }
  });

  socket.on("disconnect", (reason) => {
    // remove user from users
    delete users[socket.id];

    // notify all clients with the updated list of users
    io.emit("users", users);

    io.emit("leave", username, reason);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server đang chạy tại http://localhost:${port}/`);
});
