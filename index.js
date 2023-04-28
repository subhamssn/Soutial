const express = require('express');
const port = 8005;
const path = require('path');

const app = express();

app.use('/', require('./routes/index'));

app.listen(port, function(err){
     if(err){
        console.log(`error occurred: ${err}`);
     }

     console.log(`Server running properly on port: ${port}`);
});