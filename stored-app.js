const admin = require('firebase-admin');

const app = admin.app();
const auth = app.auth();

module.exports = { auth };
