const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName : {
        type : string,
        required : true
    },
    lastName : {
        type : string,
        required : true
    },
    email : {
        type : string,
        required : true,
        unique : true
    },
    password : { 
        typr : string ,
        required : true
    }
})

module.exports = mongoose.model("user",userSchema)