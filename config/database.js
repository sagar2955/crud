const mongoose = require("mongoose")

const {MONGO_URI} = process.env

exports.connect = ()=>{
        mongoose.connect(MONGO_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{
        console.log("DB connected....")
    })
    // Inside THEN function defination  => callback function call is executed
    .catch((err)=>{
        console.log(err)
        console.log("not connected ....")
    })

}
