const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8005;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
app.use('/static', express.static('assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

app.listen(port, function(err){
     if(err){
        console.log(`error occurred: ${err}`);
     }

     console.log(`Server running properly on port: ${port}`);
});