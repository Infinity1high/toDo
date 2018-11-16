const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
});

mongoose.model('todo',TodoSchema);
