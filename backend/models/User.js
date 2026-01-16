const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  phone: {
    type: String,
    match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
  },
  registrationNumber: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true,
    trim: true,
    uppercase: true
  },
  branch: {
    type: String,
    required: [true, 'Branch is required'],
    enum: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics & Communication', 'Computer Science', 'Information Technology', 'Chemical Engineering', 'Production Engineering', 'Mining Engineering', 'Metallurgical Engineering'],
    trim: true
  },
  college: {
    type: String,
    required: [true, 'College name is required'],
    default: 'BIT Sindri',
    trim: true
  },
  year: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
userSchema.index({ email: 1, registrationNumber: 1 });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
