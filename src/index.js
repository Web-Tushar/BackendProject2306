require('dotenv').config()
const {Dbconnection} = require ("./DatabaseConfig/DBconfig");
const app = require ("./App.js")
//    database connection method.....
Dbconnection()