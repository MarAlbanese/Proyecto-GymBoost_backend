const express = require('express'); // Se importa express 
const app = express(); // Se guarda en una constante la funcion express
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({   
    destination: 'uploads/',
    filename: function(req, file, cb){
        cb("",Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype));
    }
})


const upload = multer({
    storage: storage
})

app.get("/", (req, res) => {  // se registra una ruta en la constante app -que tiene la funcion express-  
    console.log (__dirname) // dirname es la ruta absoluta de la carpeta en donde se ejecuta el archivo -osea uploads-
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/files", upload.single('avatar') ,(req,res) => { 
    res.send("Se ha enviado con éxito!!");  
})

app.listen(3300, ()=> console.log ("Server started"));

// Pasos:  
// Comando para crear el json : npm init -yes
// npm install express multer mime-types (express es para hacer peticiones http), 
// (multer lee la informacion del archivo y permite guardar la informacion en la carpeta que quiera)
// (mime-type me informa el tipo de archivo del que se trata -ejemplo: jpg npg)
