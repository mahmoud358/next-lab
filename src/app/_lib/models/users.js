const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        // unique:true,
        // minLength:5
    },
    name:{
        type:String,
        required:true,
        // minLength:5
    },
    userName:{
        type:String,
        required:true,
        // minLength:5
    },
   

})


const userModel=mongoose.models.user||mongoose.model("user",userSchema)

export default userModel