const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true 
    },
    bio: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: '' 
    },
    role: {
      type: String,
      enum: ['student', 'mentor', 'startup'],
      default: 'student'
    },
    skills: {
      type: [String],
      default: []
    },
    xp: {
      type: Number,
      default: 0
    },
    badges: {
      type: [String],
      default: []
    },
    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }],
    savedProjects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }],
    authProvider: {
      type: String,
      enum: ['local', 'google'],
      default: 'local'
    }
  },
  {
    timestamps: true 
  }
);

module.exports = mongoose.model('User', userSchema);
