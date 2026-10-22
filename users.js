const admin = require('firebase-admin');

async function getUser(uid) {
  return admin.auth().getUser(uid);
}

module.exports = { getUser };
