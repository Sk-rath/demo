const mongoose = require("mongoose");
const db = "mongodb+srv://sangram:PV9yMQvH4S8g28M1@cluster0.78inrkd.mongodb.net/?retryWrites=true&w=majority"; 

const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;