//index.js
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

//random string generator
const {faker} = require("@faker-js/faker");
const port = 3000;
const users = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    let username = "";

    // when a user connects, generate a random username and add it to the list
    username = generateUsername();
    users.push(username);
    io.emit("userList", users);

    // send message to the specified user
    socket.on("chat", (msg) => {
        const toRegex = /^@(\w+)\s(.+)/;
        const match = msg.match(toRegex);
        if (match) {
            const toUser = match[1];
            const message = match[2];
            io.to(toUser).emit("sendMsg", username, message);
        } else {
            io.emit("sendMsg", username, msg);
        }
    });

    // when a user disconnects, remove their username from the list
    socket.on("disconnect", () => {
        if (username) {
            users.splice(users.indexOf(username), 1);
            io.emit("userList", users);
        }
    });

    socket.join(username);
});

function generateUsername() {
    return faker.person.firstName();
}

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
