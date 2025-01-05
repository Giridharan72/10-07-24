const jwt = require('jsonwebtoken');
const { Register } = require('../db/registerModel');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); 
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret_key');
    req.user = decoded; 

   
    const user = await Register.findByPk(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    next(); 
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = { authenticateToken };
