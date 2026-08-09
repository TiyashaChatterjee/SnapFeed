const dotenv = require('dotenv');
dotenv.config()

const app = require('./src/app')
const db = require('./src/db/db')

db();


app.listen(3000,()=>{
    console.log("Server is running successfully");
})