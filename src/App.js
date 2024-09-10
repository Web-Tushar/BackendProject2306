const express = require('express')
const app = express()
const chalk = require("chalk")
const Allroutes =require("./Routes/index.js");
app.use(Allroutes)


app.listen(process.env.PORT || 3000, ()=>{
      console.log(chalk.bgBlue(`server connected ${process.env.PORT}`));
})
