const {ApiError} = require ("../Utils/ApiError.js")

const asyncHandeler = (fun = ()=>{})=>{
     return async(req,res,next)=>{
     try {
          await fun (req,res,next)
     } catch (error) {
          
      new ApiError(false,null, 500, "asyncHandeler error:" + error)
     }
     }
}
module.exports = {asyncHandeler}
