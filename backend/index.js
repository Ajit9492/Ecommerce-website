const port = 5000;
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require('path')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

mongoose.connect("mongodb+srv://ajitpnaik94:Ajit0127@cluster0.hyuvyqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


app.use(express.json());
app.use(cors());
app.use('/api/product', productRouter)
app.use('/user', userRouter)


app.get("/", (req,res) => {
    res.send("Exress is connected")
})

//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});

//creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req,res) =>{
    res.json({
        success:1,
        img_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port, () => console.log(`Successfully connected PORT on ${port}`))




