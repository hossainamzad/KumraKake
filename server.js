// import express for the app
const express = require('express');
// import logger for the app
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//instantiate an express app
const app = express();
//import router here
const appRoutes = require('./routes/appRoutes');

//Middlewares:
app.use(express.static('public'));
// where to look for views
app.set('views', path.join(__dirname, 'views'));
//what is our templating engine
app.set('view engine', 'ejs');

// decalre a port for the app to listen to.
const PORT = process.env.PORT || 3000;
// set up logging
// without this line of code, you wont see this line:
//GET /index 304 4.123 ms - -
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// my landing page.
app.get('/', (req, res) => {
  // res.render('homepage');
  res.render('homepage', { message: 'Hello world from ejs!'});

})

// app.get('/add', (req, res) => {
//   // res.render('homepage');
//   res.render('add', { message: 'Hello world from ejs!'});

// })

app.use('/index', appRoutes);


// app is listening at this port.
app.listen(PORT, () => {
  console.log(`My app is listening at port: ${PORT}`);
})
// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
