import { Schema, model } from "mongoose";

const SellerLogReg = new Schema({

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },
   
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
   
}, { timestamps: true })

const Seller = model("seller", SellerLogReg);

export default Seller;