const express         = require('express');
const morgan          = require('morgan');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const mongoose        = require('mongoose');
// mongoose.Promise      = require('bluebird');
const router          = require('./config/routes');
const User            = require('./models/user');
const env             = require('./config/env');
const session         = require('express-session');
// const flash           = require('express-flash');

const app             = express();


mongoose.connect(env.db);

//Settings
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);


// didn't redirect to index page in set-up testing!
// app.get('/', (req, res) => res.render('index'));

//Middleware
app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'Shh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  if (!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .then((user) => {

      req.session.userId = user._id;

      res.locals.user = user;
      res.locals.isLoggedIn = true;

      next();
    });
});

app.use(router);
app.listen(env.port, () => console.log(`Server up and running on port: ${env.port}.`));
