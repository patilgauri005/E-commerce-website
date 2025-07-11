const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.
// The schema includes fields for user details such as name, email, and password.