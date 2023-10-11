const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

require('dotenv').config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/blogRoutes.js');
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
