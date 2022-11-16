
import mongoose from 'mongoose';
const Connection=async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@referalchecker.3osp2gl.mongodb.net/ReferalChecker?retryWrites=true&w=majority`;
    
        try {
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Successfully connected to database !!')
        } catch (error) {
            console.log('Error while connecting to the database: ',error)
        }
    
    }

export default Connection;