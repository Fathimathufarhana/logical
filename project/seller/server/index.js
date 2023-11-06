import express from 'express'
import dotenv from "dotenv"
import authRouter from "./routes/reglog.js";


import mongoose from 'mongoose'
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected");
    } catch (error) {
        console.log(error.message,"errorrrrrrrrrrrr");
    }
}

app.use("/api", authRouter);




// app.listen(process.env.PORT, () =>{
//     connect()
//     console.log(`server running on ${process.env.PORT}`);
// })

app.use("/api", authRouter);






app.get("/view", async (req, res) => {
    try {
        const savedUser = await AdminReg.find();

        // savedUser

        res.status(200).json(savedUser);
        console.log(savedUser)
    } catch (error) {
        res.json(error.message);
    }
})


app.listen(process.env.PORT, () =>{
    connect()
    console.log(`server running on ${process.env.PORT}`);
})
