const express=require("express")
const {connection,MobileModel}=require("./db")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())


app.get("/mobiles",async(req,res)=>{
    
    let query=req.query
  try{
    const userall= await MobileModel.find(query)
    res.send(userall)

  }catch(err){
    console.log(err)

  }
})
app.get("/mobile/title/:title",async(req,res)=>{
    const tit=req.params.title
  
  try{
    const userall= await MobileModel.find({id:tit})
    res.send(userall)

  }catch(err){
    console.log(err)

  }
})
app.get("/mobiles/rating/:rating",async(req,res)=>{
    const ret=req.params.rating
  
  try{
    const userall= await MobileModel.find({rating:ret})
    res.send(userall)

  }catch(err){
    console.log(err)

  }
})

app.patch("/updatamobile/:id",async(req,res)=>{
  const id=req.params.id
    const upload=req.body
    try{
        await MobileModel.updateOne({id:id},upload)
        res.send("movie has been updated")
    }catch(err){
        console.log({"error":err.message})
    }
})
app.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
     
      try{
          await MobileModel.findByIdAndDelete({id:ID})
          res.send("mobile has been Delete")
      }catch(err){
          console.log(err);
      }
  })
app.post("/addmobile",async(req,res)=>{
   try{
    const users=new MobileModel(req.body)
    await users.save()
        res.send({"msg":"mobile has been added"})

   }catch(err){
    res.send({"msg":"cannot post ","error":err.message})

   }
    
})




app.listen(4700,async()=>{

try{
   await  connection
  
      
}catch(err){
    console.log(err);
}
console.log("your port is 4700")
  
})