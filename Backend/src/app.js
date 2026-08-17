const express = require('express')
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require("cors")

//Used for making instances in app
const app = express();


//Middlewares:-
app.use(express.json())
app.use(cors())
const upload = multer({storage: multer.memoryStorage()})
//for sending form-data, it's an middleware
//Here we have just uploaded image from local machine


//POST API:-
app.post('/create-post', upload.single("image"), async(req, res)=>{
//req.file is the return type of form-data in body in Postman


//the image buffer is using here to store the cloud storage provider(imageKit)
    const result = await uploadFile (req.file.buffer)


//storing the whole data inside the database
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })


//printing the response
    res.status(201).json({
        message:"Posted Successfully",
        post
    })
})
//GET API
app.get('/posts', async(req, res)=>{
    const posts = await postModel.find();

    res.status(200).json({
        message: "All postst fetched successfully",
        posts
    })
})


module.exports=app;