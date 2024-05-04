const mongoose = require('mongoose');

const studentDataSchema =new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true

  },
  city: {
    type: String,
    required: true,
    unique: true

  },
  id: {
    type: String,
    required: true,
    unique: true
  }
});

const StudentData = mongoose.model('studentData',studentDataSchema);

module.exports =StudentData;