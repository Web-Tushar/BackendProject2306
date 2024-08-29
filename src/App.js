const express = require('express')
const app = express()
const chalk = require("chalk")

app.get('/',(req, res)=> {
  res.send('Hello World bye bye tata')
})

app.listen(process.env.PORT || 300, ()=>{
      console.log(chalk.bgBlue(`server connected ${process.env.PORT}`));
})