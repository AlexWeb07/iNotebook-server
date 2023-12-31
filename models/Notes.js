const mongoose=require('mongoose')

const NoteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    },
    userId:{

    }
})

const NoteModel= new mongoose.model("notes",NoteSchema)

module.exports=NoteModel;