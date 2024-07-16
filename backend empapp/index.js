//import express
var express=require("express")
var cors=require("cors")
//initialize
var app=express();

require("./connection")
var empmodel=require("./model/employee")

app.use(express.json());
app.use(cors());

//api
//api to add
app.post("/add",async (req,res)=>{
    try {
        await empmodel(req.body).save()
        res.send({message:"data saved"})
    } catch (error) {
        
        comsole.log(error)
    }
})
//
app.get("/view", async (req,res)=>{
try {
    var output=await empmodel.find()
    res.send(output);

} catch (error) {
console.log(error)    
}
})
//
app.delete('/remove/:a', async(req,res)=>{
    try {
        var id=req.params.a
        console.log(id)
    await empmodel.findByIdAndDelete(id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
        
    }
    })
    //
    app.put('/update/:b',async(req,res)=>{
        try {
            var id=req.params.b;
           var output= await empmodel.findByIdAndUpdate(id,req.body);
           res.send({message:"updated",output});
        } catch (error) {
            console.log(error);
            
        }
    })
//port 
app.listen('8765',()=>{
    console.log("port is up and running");
})