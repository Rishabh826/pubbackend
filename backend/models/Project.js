const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    project:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    projecttag:{
        type: String,
        default: "General"
    },
    content:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', projectSchema);