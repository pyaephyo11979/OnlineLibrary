let jwt = require ("jsonwebtoken");

let validate_token = async(req,res,next)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.Private_Key, function(err, decoded) {
            req.user = decoded;
            next(); // bar
          });
    }else{
       
    }

}

let validate_role = async (req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role!="Admin"){
        console.log("This is not admin")
    }else{
        console.log("This is admin")
    }
    
}

module.exports = {validate_token,validate_role}