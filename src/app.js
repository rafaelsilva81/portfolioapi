/* General Imports */
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

/* Routes Import */
const projectsApiRouter = require('./routes/projects');
const adminRouter = require('./routes/admin'); // Importing admin routes

const app = express(); //Creating the server

/* Middlewares*/
// Use a redirect to admin when accessing root path ('/')
/* app.use((req, res, next) => {
  if (req.url == '/') {
    res.redirect('/admin');
    return;
  }
  next();
});
 */

app.get('/', function (req, res) {
  res.redirect(303, '/admin');
});

//CORS
app.use(cors())

//Use static router
app.use('/public', express.static('public'));

//Use ADMINJS router
app.use('/admin', adminRouter);

//Use JSON for API
app.use(express.json());

//Use cookie parser
app.use(cookieParser());

//Use API routes
app.use('/api/projects/', projectsApiRouter);

/* Connect to the dabase, run the server */
const run = async () => {
  /* TODO add sensitive information to .env */
  /* TODO refactor */
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  let port = process.env.PORT; /* For heroku */
  if (port == null || port == '') {
    port = 8000;
  }
  await app.listen(port, () => console.log('Server started on port 8000'));
};

run();
