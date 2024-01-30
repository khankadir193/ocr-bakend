const express = require('express');
// const Tesseract = require('tesseract.js');
const app = express();
app.use(express.json());
app.post('/perform-ocr',(req,res)=>{

    console.log('message:ocr(optical recognition text)');

    let recognitionText = "router is working properly....";  

    res.json({"text":recognitionText}); 
});

const  PORT = 3000;

app.listen(3000,()=>{
    console.log(`Server is running is on port ${PORT}`);
});