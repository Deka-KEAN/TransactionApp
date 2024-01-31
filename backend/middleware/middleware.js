
const zod = require("zod");
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddleware = (req,res,next) => {
    console.log("njhgcf");
    const authToken=req.headers['authorization'];
    // console.log(authToken);
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(403).json({});
    }
    const token=authToken.split(" ")[1];
    try{
        const verified=jwt.verify(token,JWT_SECRET);
        // console.log(verified);
        if(verified.userId){
            req.userId=verified.userId;
            next();
        }else{
            
            return res.status(403).json({});
        }
    }catch(err){
        console.log("err");
        return res.status(403).json(err);
    }
}

module.exports= {
    authMiddleware
};