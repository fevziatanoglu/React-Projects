import mongoose from "mongoose";

// user shema
const userShema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },{collection:"users"}
);

// export userShema as module with name of "User"
export default mongoose.model("User" , userShema);
