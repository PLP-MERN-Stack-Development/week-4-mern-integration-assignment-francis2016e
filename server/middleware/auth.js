const jwt = require("jsonwebtoken");


//check token and sets req.user 

exports.protect = (req, res, next) =>{
  const auth = req.headers.authorization;
  if(!auth || !auth.startsWith("Bearer")) return res.status(401).json({message:'no token'});

  const token = auth.split("")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SCRETE)
    req.user = decoded;
    next()
  } catch (error) {
    return res.status(403).json({message:"invalid token"})
  }
};


//check if role exist

exports.authorize = (roles) =>{
  return (req, res, next) =>{
    if (!roles.includes(req.user.role)) return res.status(403).json({message:"forbidden"});
    next();
  }
}