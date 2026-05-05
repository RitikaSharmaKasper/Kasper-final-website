const jwt= require('jsonwebtoken')
const userModel= require('../models/userModel')


const checkIsUserAuthenticated= async(req,res,next) => {
    let token;
    const {authorization}= req.headers; 
    console.log("Authorization Header:" , authorization)
    console.log("All headers", req.headers);
      // Check if the authorization header exists and starts with "Bearer"
    if(authorization && authorization.startsWith("Bearer")){
        try{
              // Extract token from the header
            token = authorization.split(" ")[1];
            //verify token
            const {userID} = jwt.verify(token, "pleaseSubscribe");
            // const decoded = jwt.verify(token, "pleaseSubscribe");
            // req.user = await userModel.findById(decoded.userID).select("-password");
            
            // Find user by ID
            req.user= await userModel.findById(userID).select("-password");
            if (!req.user) {
                return res.status(401).json({ message: "Unauthorized User:User not found" });
            }

            next();  
        }catch(error){
            return res.status(401).json({message:"unAuthorized User:Invalid token"});
        }
  // If no token is provided, allow the request to proceed (treat as guest)
    }else{
 req.user = null; // Set user to null for guests
    //     return res.status(401).json({message:"unAuthorized User:No token provided"});
  return next();
    }
};
module.exports = checkIsUserAuthenticated;

