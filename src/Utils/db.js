import mongoose from "mongoose";

const connect  = async () => {
    try{
        mongoose.set("strictQuery", false);

        mongoose.connect(process.env.MONGO_URL);
        console.log('connect')
    }catch(err){
        throw new Error("you have error")
    }
}

export default connect