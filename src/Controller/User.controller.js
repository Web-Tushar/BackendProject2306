const { ApiError } = require('../Utils/ApiError.js')
const { Apiresponse } = require("../Utils/ApiResponse.js")
const { asyncHandeler } = require("../Utils/asyncHandeler.js")
const { usermodel } = require("../Model/User.model.js")
const { PasswordChecker,EmailChecker} = require("../Utils/EmailChecker.js")
/* 
 todo creatUsers controler implement 
 * m@param {{req.body}}req
  @param  {{ }} res
 *
*/

const CreateUser = asyncHandeler(async (req, res) => {


     // send information into database
     try {
          const { FirstName,
               City, LastName,
               Telephone,
               Email_address,
               Address_1,
               Password,
          } = req?.body;


          if (!FirstName) {
               return res.status(400).json(new ApiError(false, null, 400, `FirstName is missing`))
          }
          if (!LastName) {
               return res.status(400).json(new ApiError(false, null, 400, `LastName is missing`))
          }
          if (!Email_address ||!EmailChecker(Email_address)) {
               return res.status(400).json(new ApiError(false, null, 400, `Email_address is missing`))
          }
          if (!Address_1) {
               return res.status(400).json(new ApiError(false, null, 400, `Address_1 is missing`))
          }

          if (!Password || !PasswordChecker(Password)) {
               return res.status(400).json(new ApiError(false, null, 400, `Password is missing or invalid password `))
          }
          if (!City) {
               return res.status(400).json(new ApiError(false, null, 400, `City is missing`))
          }

          if (!Telephone) {
               return res.status(400).json(new ApiError(false, null, 400, `Telephone is missing`))
          }

          // check if  usrs already exist
          const existUser = await usermodel.find({ $or: [{ FirstName: FirstName }, { Email_address: Email_address }] })
          console.log(existUser);
          // return

          if (existUser?.length) {
               return res.status(404).json(new ApiError(false, null, 400, `${existUser[0]?.FirstName} all ready exist`))
          }
          console.log(existUser); 

               const Users = await new usermodel({
                    FirstName, LastName, Email_address, Address_1, Password, City, Telephone
               }).save();
               // res.send(Users)
               if (Users) {
                    const recentCreatUser = await usermodel.find({$or: [{ FirstName }, { Email_address }] }).select("-Password -_id")
                    return res.status(200).json(new Apiresponse(true, recentCreatUser, 200, null, " registraton successful"))
               }
     } catch (error) {
          console.log(error);
          return res.status(404).json(new ApiError(false, null, 400, ` registration controler is faild${error} `))
     }
})
module.exports = { CreateUser }