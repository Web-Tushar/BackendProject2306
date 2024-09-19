/* 
 todo creatUsers controler implement 
 * m@param {{req.body}}req
  @param  {{ }} res
 *
*/

const CreateUser = async (req, res) => {
     try {
          res.status(200).json(req.body)
          // res.send('Hello mern 2306')

     } catch (error) {
          console.log(error);

     }
}

module.exports = { CreateUser }