const jwt = require("jsonwebtoken");
const SECRET_KEY = "3d9f6a67e26454f09379c5465360ec06d4f7e1db9a3f7ad688c5b9f7b9c68565";

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
};
