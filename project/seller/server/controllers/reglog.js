// import AdminLog from "../models/adminlog.js";
import Seller from "../models/adminreg.js";
import bcrypt from 'bcrypt'


export const register = async (req, res, next) => {

  
    
    try{

        const { firstname,lastname,email, password } = req.body;

        console.log('admin...');
        
        const saltRounds = 10;

        const salt = bcrypt.genSaltSync(saltRounds);

        
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash,'----');

        const newAdmin = new Seller({ firstname,lastname, email, password:hash})
        const savedAdmin = await newAdmin.save();
        res.json(savedAdmin)
        // return true

    

    }catch(error){
        console.log(error.message);
    }


   


    
}




export const login = async (req, res, next) => {

try {
    const{ email, password } = req.body
    const user = await Seller.findOne({email:email })
    console.log(user);

    if(!user){
        res.status(404).json({message:"user not found!"})
    }
    const isPassword = await bcrypt.compare(req.body.password, user.password)
    console.log(isPassword,"password");

    if (isPassword) {
        res.status(200).json(user)
    } else {
        res.status(404).json({message:"user not found!"})
    }


}catch(error){
    res.status(404).json({message:error.message})
    console.log(error);
}


}


// export const view =async() => {
//    try {
//     const view = await AdminReg.find()
//     console.log(view);
//     res.status(200).json(view)
//    } catch (error) {
//     res.json(error.message)
//    }
// }

