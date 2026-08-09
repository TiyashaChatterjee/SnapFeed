const mongoose = require('mongoose');

const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

async function connectDB() {
    const uri = process.env.MONGODB_URI
    await mongoose.connect(uri)

    console.log("DB is connected")
}

module.exports=connectDB