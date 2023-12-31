require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

app.use(express.json());
app.use(fileUpload());

//to show the photo with url
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const {saveFile, saveFiles, deleteFile} = require('./utils/gallery');

//single file upload
// app.post('/gallery',saveFile, (req, res, next) => {
//     res.status(200).json({msg : "File Uploaded with single", "filename" : req.body.image});
// });

//multiple files uploads
app.post('/gallery',saveFiles, (req, res, next) => {
    res.status(200).json({msg : "File Uploaded", "filenames" : req.body.images});
});

//for single delete
// app.post('/gallery', async(req, res, next) => {
//     await deleteFile(req.body.name);
//     res.status(200).json({msg:"File Deleted!"});
// });

app.use('/users', userRoute);
app.use('/posts', postRoute);

//error handling
app.use((err, req, res, next) => {
    err.status = err.status || 200;
    res.status(err.status).json({
        cons: false,
        msg : err.message
    });
});

app.listen(process.env.PORT, console.log(`server is running at port ${process.env.PORT}`));