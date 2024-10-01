require('dotenv').config()
const {Dbconnection} = require ("./DatabaseConfig/DBconfig.js");
const app = require ("./App.js")

//    database connection method.....
Dbconnection()