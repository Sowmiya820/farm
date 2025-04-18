import mongoose from "mongoose";

export const connectDB = async()=>{
    (await mongoose.connect("mongodb+srv://sowmiyaa2023it:Sowmiya@2006@cluster0.jgkrj.mongodb.net/food-del").then(()=>console.log("DB Connected")))
}