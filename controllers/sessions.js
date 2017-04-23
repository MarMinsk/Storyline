const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {

}

module.exports = {
  new: sessionsNew,
  creae: sessionsCreate
};
