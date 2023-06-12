const express = require('express');
const fs = require('fs');
const app = express();

app.post('/createFile', (req, res) => {

    const dateObject = new Date();

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const fileName = `${hours}-${minutes}.txt`;

    fs.writeFile(`./${fileName}`, dateObject.toString(),(err)=>{
    if(err){
        console.log(err);
        res.send('Error creating file');}
        else{
            res.send('file created successfully')
        }
    })

console.log(dateObject)

} )

app.listen(8000, () => {
    console.log('server is running on port 8000');
} );