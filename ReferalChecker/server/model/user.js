import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    referrername:[{ 
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        
        default:null }]
    ,
    isPaymentMade:{
        type:Boolean,
        dafault:'false'
        
    },
    TotalEarning:{
        type:Number,
        dafault:0
        
    }
    
})

const User=mongoose.model('User',userSchema);
export default User;