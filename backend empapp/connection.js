//import
var mongoose=require("mongoose")
mongoose.connect("mongodb+srv://user1:abeed@cluster0.rfmtpxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connect")

}).catch((error)=>{
    console.log(error)
})