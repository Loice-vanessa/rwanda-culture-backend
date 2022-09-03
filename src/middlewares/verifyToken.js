import TokenAuth from "../utils/token"

const verifyToken =  (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({ message: "no token provided" });
    }
    try{
      const user = TokenAuth.decodeToken(token);
      req.user = user
      return next();
    }catch(error){
      console.log(error);
    }
    
};
export default verifyToken;