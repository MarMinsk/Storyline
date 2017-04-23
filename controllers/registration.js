const User = require('../models/user');

function registrationsNew(req, res) {
  return res.render('registrations/new');
}

function registrationsCreate(req, res) {

}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
