import express from "express"
import { addFood,listFood, removeFood} from "../controllers/foodcontroller.js"
import multer from "multer"


const foodRouter =express.Router()

//image storage engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list",listFood)

foodRouter.post("/remove",removeFood)


export default foodRouter























// import express from "express";
// import { addFood } from "../controllers/foodcontroller.js";
// import multer from "multer";
// import fs from "fs";

// const foodRouter = express.Router();

// // Ensure "uploads" folder exists
// const uploadPath = "uploads";
// if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath, { recursive: true });
// }

// // Image storage engine
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}_${file.originalname}`);
//     }
// });

// // const upload = multer({ storage: storage });



// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (!file) {
//             return cb(new Error("No file uploaded"), false);
//         }
//         cb(null, true);
//     }
// });

// // foodRouter.post("/add", upload.single("image"), addFood);


// foodRouter.post("/add", upload.single("image"), (req, res, next) => {
//     console.log("Received file:", req.file); // Check if file is received
//     console.log("Request body:", req.body);
//     next();
// }, addFood);


// export default foodRouter;
