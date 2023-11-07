// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const controllerFunction = require('../controllers/authController').controllerFunction;

// exports.verifyToken = async (req, res, next) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ message: 'Authentication required' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.userId);
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid token' });
//         }
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Invalid token' });
//     }

//     const verifyAdmin = (req, res, next) => {
//         const token = req.headers.authorization;

//         if (!token) {
//             return res.status(403).send("Token required");
//         }

//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             if (decoded.isAdmin) {
//                 next();
//             } else {
//                 res.status(403).send("Access denied. Not an admin.");
//             }
//         } catch (e) {
//             res.status(403).send("Invalid token");
//         }
//     };

// };
