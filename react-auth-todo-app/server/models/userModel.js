import mongoose from "mongoose"

const userSchema = mongoose.Schema({

    email: {
        type: String,
        require: true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},{collection:"users"});

export default mongoose.model("User", userSchema);