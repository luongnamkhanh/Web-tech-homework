const express = require("express");
const app = express();
const router = require('./routes/smartPhoneRoutes');

// Database connection
require('./DBConnection/database');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/smartphones', router);


// Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

