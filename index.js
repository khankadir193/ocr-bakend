const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const Tesseract = require('tesseract.js');
const app = express();
app.use(express.json());
app.post('/perform-ocr', async (req, res) => {
    // const imgUrl = req.body.imgUrl;
    const ocrApi = "https://api.ocr.space/parse/imageurl?apikey=K89496159888957&url=https://hamariweb.com/poetry/images/Poetry/english-poetry-100696.png";

    // let recognitionText = "router is working properly.. OCR response..";
    res.header('Access-Control-Allow-Origin', '*');
    // return res.json({ "text": `${recognitionText} imageURL ${imgUrl}` });

    const response = await axios.get(ocrApi);
    console.log('response...????', response.data.ParsedResults[0].ParsedText);

    return res.json({ "text": `${response.data.ParsedResults[0].ParsedText}` });
    
});

const PORT = 3000;

app.listen(3000, () => {
    console.log(`Server is running is on port ${PORT}`);
});