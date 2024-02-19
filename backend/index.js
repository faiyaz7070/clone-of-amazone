const express=require("express")
const jwt=require("jsonwebtoken")
const {connection,MobileModel,UserModel}=require("./db")

const cors=require("cors")

const app=express()
const bcrypt=require("bcrypt")

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
app.get("/Samsung",async(req,res)=>{
    
 
try{
const userall =await MobileModel.find( { title: { $regex: /^S/, $options: 'm' } } )
  res.send(userall)

}catch(err){
  console.log(err)

}
})
app.get("/Redmi",async(req,res)=>{
    
 
  try{
  const userall =await MobileModel.find( { title: { $regex: /^R/, $options: 'm' } } )
    res.send(userall)
  
  }catch(err){
    console.log(err)
  
  }
  })
  app.get("/Apple",async(req,res)=>{
    
 
    try{
    const userall =await MobileModel.find( { title: { $regex: /^A/, $options: 'm' } } )
      res.send(userall)
    
    }catch(err){
      console.log(err)
    
    }
    })
    app.get("/Oneplus",async(req,res)=>{
    
 
      try{
      const userall =await MobileModel.find( { title: { $regex: /^O/, $options: 'm' } } )
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

app.patch("/updatemobile/:id",async(req,res)=>{
  const id=req.params.id
    const upload=req.body
    try{
        await MobileModel.updateOne({id:id},upload)
        res.send("mobile has been updated")
    }catch(err){
        console.log({"error":err.message})
    }
})
app.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
     
      try{
          await MobileModel.deleteOne({id:ID})
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
app.post("/signup", async (req, res) => {

  try {

      const {name,email,pass} = req.body;

    


    
      const Userexit = await UserModel.findOne({ email })

      if (Userexit) {
          return res.status(201).json({ msg: "User already exist" })
      }

    const hash= await bcrypt.hashSync(pass,8)
    const user=new UserModel({name,email,pass:hash})
    await user.save()
    res.send({msg:"register successful",user})
    
  } catch (err) {
      console.error( err);
      res.status(500).json(err);
  }
})

app.post("/login", async (req, res) => {

  try {
      const { email, pass } = req.body

      const user = await UserModel.findOne({ email })
     

      if (!user) {
          return res.status(401).json({ message: "user not found please signup" })
      }

      const isPassword= await bcrypt.compare(pass, user.pass)

      if (!isPassword) {
          return res.status(201).json({ message: "Invalid password" })
      }

      const token = jwt.sign({ userId: user._id }, "faiyaz");


      res.status(200).json({ msg: "Login Successful", token: token });

  } catch (err) {
      console.error(err);
      res.status(500).json(err);
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