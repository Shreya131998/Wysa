const express= require("express")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")
const User=require("./model.js")
const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Shreya1998:1234.qwer@cluster0.gzlyp.mongodb.net/Wysa-Assignment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.post("/",async(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).send({msg:"Please enter valid credentials"})
        }
        console.log(req.body)
        let {name}=req.body;
        let data=await User.findOne({name:name})
        if(data){
            return res.status(400).send({msg:"User already registered"})
        }
        let userData=await User.create(req.body)
        return res.status(201).send({msg:"Created Successfully"})
        


    }
    catch(err){
        return res.status(500).send({msg:err})
    }
})



app.listen(process.env.PORT || 9000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 9000))
});