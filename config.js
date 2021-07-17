require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/todo-app'
}