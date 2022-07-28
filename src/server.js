'use strict';
const express = require('express');
const stamper = require('../middlewares/stamper');
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');

const app = express();


app.get("/", (req,res) => {
    res.send("hello");
});

app.get("/data", (req,res) => {
    res.json({
        id : 1,
        name : 'samar hussein  azzam',
        email : 'samar@email.com',
    });
});

app.get("/test",stamper ,(req,res) => {
    res.json({
        id : 2 ,
        name : 'test',
        email : 'test@gmil.com',
        time : req.timestamp ,
    });
});

app.get('/bad', (req , res)=>{
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);  
    });
    res.send(result);
});

app.use('*', notFoundHandler);
app.use(errorHandler);




function start(port){
    app.listen(port , () => {
        console.log(`im listening on port ${port}`);
    });

}


module.exports={
    app : app ,
    start : start ,
}
