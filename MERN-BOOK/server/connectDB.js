const mongoose =require("mongoose");

const connectDB = async () => {

    try {
        
      mongoose.set('strictQuery',false)  //remove warnings inside the command line
      const conn = await mongoose.connect(process.env.MONGODB_URI) //mongodb connection
      console.log(`database connected ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
// vMDM8Q4Kzc2Ltfp0
module.exports = connectDB;