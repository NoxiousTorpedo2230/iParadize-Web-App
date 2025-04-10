import jwt from 'jsonwebtoken';

export const userAuth = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ success: false, message: 'No token provided' });
  }
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verified.id;
    next();
  } catch (error) {
    console.error('Invalid or Expired Token:', error);
    return res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
};