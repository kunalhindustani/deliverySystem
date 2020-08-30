//User Information Schema
const mongoose = require('mongoose');


const userDetailSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    email: { type: String },
    password: { type: String, default: null },
    saltSecret: { type: String },
    dob: { type: Date },
    //0 for user, 1 for admin
    userType: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    alive: { type: Boolean, default: true },
    phone: { type: Number },
    address_name: { type: String },
    address_city: { type: String },
    address_state: { type: String },
    address_pincode: { type: Number },
    gender: { type: String },
    userOTP: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    },
  {
    timestamps: true,
  }
);

mongoose.model('userDetailModel', userDetailSchema);