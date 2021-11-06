const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  description: { type: String, required: true }
});

 const Task= mongoose.model('Task', schema);

 module.exports = Task