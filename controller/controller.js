const User = require("../model/user")  // user schema

const register = async (req,res)=>{
    try {
        let {firstName , lastName , email , password} = request.body

        //validation for required all fields
        if(!(firstName && lastName && email && password))
        {
            res.send(400).send("All inputs required")
        }

        // validation for 
        const emailExist = await User.findOne({email})
        if(!emailExist){
           
            const user = await User.create({
                firstName,
                lastName,
                email,
                password
            })
        }

    } catch (error) {
        
    }
}

module.exports = {register}