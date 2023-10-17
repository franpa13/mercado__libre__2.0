// ************ Require's ************
const path = require("path")
const multer = require ("multer")
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const controller = require("../controllers/productsController");


// MULTER CONFIG
const storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        //direccion de imagenes
      const pathImage = path.join(__dirname,"..","..","public","images","products")
      cb(null,pathImage)
    },
    filename:(req,file,cb)=>{
        const newFileName = "img-" + Date.now() + path.extname(file.originalname)
        cb(null,newFileName)
    }
})
const upload = multer({storage})
/*** GET ALL PRODUCTS ***/ 
router.get('/', controller.index); 


module.exports = router;

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', controller.create); 
router.post('/',upload.single("image"), controller.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', controller.detail); 


/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id",controller.edit)
router.put('/edit/:id', controller.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete("/delete/:id", controller.destroy); 



