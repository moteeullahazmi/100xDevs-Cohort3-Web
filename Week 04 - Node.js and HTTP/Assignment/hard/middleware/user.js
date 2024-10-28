const jwt = require("jsonwebtoken");
const JWT_USER_SECRET = "xyz@123";

function userMiddleware(req, res, next) {
  try {
    const token = req.headers.token;
    // token decoded
    const decoded = jwt.verify(token, JWT_USER_SECRET);

    if (decoded) {
      req.userId = decoded.id;
      next();
    }
  } catch (error) {
     console.error("JWT verification error:", error.message);
    res.status(403).json({
      message: "JSON token not certify",
    });
  }
}


module.exports = userMiddleware;
