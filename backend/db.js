const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://faiyaz:dulraz@cluster0.tohzp.mongodb.net/mobileapi?retryWrites=true&w=majority")




const schema=mongoose.Schema({
    id:{type:Number,require:true},
    title:{type:String,required:true},
    image:{type:String,required:true},
    rating:{type:String,required:true},
    price:{type:Number,required:true}

},{
    versionKey:false
})
const MobileModel=mongoose.model("mobile",schema)

module.exports={
    connection,MobileModel
}


