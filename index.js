const express = require('express');
const cors = require('cors');
// const Tesseract = require('tesseract.js');
const app = express();
app.use(express.json());
app.post('/perform-ocr',(req,res)=>{
    const imgUrl = req.body.imgUrl;
    
    console.log('req.body....????',req.body);
    console.log('imgUrl...??',imgUrl);
    let recognitionText = "router is working properly.. OCR response..";  

    res.header('Access-Control-Allow-Origin', '*');
    return res.json({"text":`${recognitionText} imageURL ${imgUrl}`}); 
});

const  PORT = 3000;

app.listen(3000,()=>{
    console.log(`Server is running is on port ${PORT}`);
});