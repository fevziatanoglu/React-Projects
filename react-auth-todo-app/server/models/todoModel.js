import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        require: true,
    },
    user:{
        type:String,
        require:true
    },
    check:{
        type:Boolean,
        require:true
    }

},{collection:"todos"});

export default mongoose.model("Todo", todoSchema);