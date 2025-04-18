import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item


const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`
    

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save()
        res.json({sucess:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({sucess:false,message:"Error"})
    }
}

//add food list
const listFood = async(req,res)=>{
  try{
    const foods=await foodModel.find({})
        res.json({sucess:true,data:foods})
   
  }
  catch(error){
      console.log(error)
      res.json({sucess:false,message:"error"})
  }
}

//remove food item
const removeFood=async(req,res)=>{
 try{
   const food = await foodModel.findById(req.body.id)
   fs.unlink(`uploads/${food.image}`,()=>{})
   await foodModel.findByIdAndDelete(req.body.id)
   res.json({sucess:true,message:"Food Removed"})
 }
 catch(error){
   console.log(error)
   res.json({sucess:false,message:"error"})
 }
}
export {addFood,listFood,removeFood}




// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// const addFood = async (req, res) => {
//     try {
//         // Check if all required fields are present
//         const { name, description, price, category } = req.body;
//         if (!name || !description || !price || !category) {
//             return res.status(400).json({ success: false, message: "All fields are required" });
//         }

//         // Check if a file was uploaded
//         let image_filename = req.file ? req.file.filename : null;

//         // Create a new food item
//         const food = new foodModel({
//             name,
//             description,
//             price,
//             category,
//             image: image_filename
//         });

//         await food.save();
//         res.status(201).json({ success: true, message: "Food Added" });

//     } catch (error) {
//         console.error("Error adding food:", error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// export { addFood };

































// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// // Add food item
// const addFood = async (req, res) => {
//     try {
//         console.log("Request body:", req.body); // Debugging
//         console.log("Uploaded file:", req.file); // Debugging

//         // Check if file is uploaded
//         if (!req.file) {
//             return res.status(400).json({ success: false, message: "Image file is required" });
//         }

//         const food = new foodModel({
//             name: req.body.name,
//             description: req.body.description,
//             price: req.body.price,
//             category: req.body.category,
//             image: req.file.filename, // Only access if req.file exists
//         });

//         await food.save();
//         res.status(201).json({ success: true, message: "Food Added Successfully" });

//     } catch (error) {
//         console.error("Error while adding food:", error);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };

// export { addFood };
