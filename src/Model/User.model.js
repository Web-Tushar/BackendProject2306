const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 
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
          max: [25, "Max Name Size 25 charecter"],
          min: [25, "Min Value 3 charecter"]
     },
     Email_address:{
          type:String,
          unique: true,
          required: [true, "email is Missing"]
     },
     Telephone: {
          type: String,
          required: [true, 'Telephone number is missing !!'],
     },
     Address_1: {
          type: String,
          required: [true, 'Address_1  is missing !!'],
     },
     Address_2: {
          type: String,
     },
     City: {
          type: String,
          required: [true, 'City is missing !!'],
     },
     Post_Code: {
          type: Number,
          max: [4, "invalid post code max size is 4 !!"],
          min: [4, "invalid post code min size is 4 !!"]
     },
     Division: {
          type: String,
     },
     // District: {
     //      type: String,
     //      trim: true,
     //      required: [true, 'District is missing !!'],
     // },
     Password: {
          type: String,
          trim: true,
          required :true,
     },
     // Policy: {
     //      type: Boolean,
     //      trim: true,
     //      required: [true, 'Policy is missing !!'],
     // },
     AccessToken: {
          type: String,
          
     },
     Role: {
          type: String,
          trim: true,
     },

     OTP: { 
          type: Number,
     },

     Role:{
          type: String,
          enum:['admin', "users", "marchent"],
          default: "users",
     },
     refreshToken: {
          type: String
     },
     avater:{
          type:String, 
     }
},
{ timestamps: true }
);
UserSchema.pre("save",async function (next) {
     if(this.isModified(this.Password)){
          this.Password = await bcrypt.hash(this.Password,10) 
          next()

     }
    next()
    console.log(hashpassword);
})
UserSchema.methods.isVaidatePassowrd = async(plainpassword)=>{
      const passwpordResult = await bcrypt.compare(plainpassword,this.Password)
      return passwpordResult
}


const usermodel = mongoose.model('Users', UserSchema);
module.exports = { usermodel }