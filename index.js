import qr, { image } from "qr-image";
import fs from "fs";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/",(req, res)=>{
    res.render("index.ejs")
  })
  app.post("/",(req,res)=>{
    const url = req.body.input
    var qrImage = qr.image(url)
    qrImage.pipe(fs.createWriteStream('./public/images/qr.png'));
    var image = "./images/qr.png"
    res.render("index.ejs",{image:image})
  })

  app.listen(port, ()=>{
    console.log(`Listening at ${port}`)
  })

