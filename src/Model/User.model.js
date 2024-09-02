const mongoose = require("mongoose");
const { Schema } = mongoose
const UserSchema = new Schema({
     FirstName: {
          type: String,
          required: [true, 'firstName is missing !!'],
          trim: true,
          max: [20, "max name size is 20"],
          min: [3, "min name size is 3"],
     },
     LastName: {
          type: String,
          trim: true,
     },
     Telephone: {
          type: number,
          trim: true,
          unique: true,
          required: [true, 'Telephone number is missing !!'],
          max: [11," max number size is 11"]

     },
     Address_1: {
          type: String,
          trim: true,
          unique: true,
          required: [true, 'Address_1  is missing !!'],

     },
     Address_2: {
          type: String,
          trim: true,
     },
     City: {
          type: String,
          trim: true,
          unique: true,
          required: [true, 'City is missing !!'],

     },
     Post_Code: {
          type: String,
          trim: true,
          unique: true,
          required: [true, 'Post_Code is missing !!'],
          max: [ 4 , "invalid post code max size is 4 !!"],
          min: [ 4 , "invalid post code min size is 4 !!"]

     },
     Division: {
          type: String,
          trim: true,
          required: [true, 'Division is missing !!'],

     },
     District: {
          type: String,
          trim: true,
          required: [true, 'District is missing !!'],

     },
     Password: {
          type: String,
          trim: true,
          required: [true, 'Password is missing !!'],

     },
     Policy: {
          type: Boolean,
          trim: true,
          required: [true, 'Policy is missing !!'],

     },
     AccessToken: {
          type: String,
          trim: true,

     },
     Role: {
          type: String,
          trim: true,


     },

     OTP:{
          type: number,
     }


},
{ timestamps: true }
);
const usermodel = mongoose.model('Tank', UserSchema );
module.exports = {usermodel}