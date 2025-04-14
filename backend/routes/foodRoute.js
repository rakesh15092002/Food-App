import express from "express";
import multer from "multer";

import { addFood ,listFood,removeFood} from "../controllers/foodController.js"; // Ensure correct path



const router = express.Router();

// Image Storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

router.post("/add", upload.single("image"), addFood); 
router.get('/list',listFood)
router.post("/remove",removeFood)
// router.get("/file/:filename", getImage);
export default router;
