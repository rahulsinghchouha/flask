const mongoose = require("mongoose");

const dbConnect = async(req,res)=>{
    try{
    console.log("before connected");
       await mongoose.connect("mongodb://localhost:27017/flask") //await aane se aage ka code tb tk run nhi hoga jb tk ki await pura na ho jaye
    console.log("db connected succesfully");
    }
    catch(error)
    {
        console.log("db not connected",error);
    }
}
module.exports= dbConnect;