const express = require('express');
const fs = require("fs");
const app = express();


app.post('/readFolder', (req, res) =>{

    fs.readdir("../day 39 node API end point to create file and read file", (err, files)=>{
        console.log("Files in the directory", files);
    })

})

app.listen(8000,()=>{
    console.log("server is running on the port 8000")
})

