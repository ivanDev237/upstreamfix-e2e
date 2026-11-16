const { getAuth } = require('firebase-admin/auth');

async function getUser(uid) {
  return getAuth().getUser(uid);
}

module.exports = { getUser };
