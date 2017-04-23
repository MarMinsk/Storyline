const User = require('../model/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {

}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
