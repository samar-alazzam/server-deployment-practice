'use strict';
module.exports = (error , req , res , next)=>{
    res.status(500).send({
        code : 500 ,
        rout : req.path ,
        message : `server Error : ${error.message}`,

    });
}