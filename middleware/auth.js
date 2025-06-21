// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const authMiddleware = (req, res, next) => {
// const token = req.header('Authorization');
// if (!token) return res.status(401).json({ message: 'Token tidak ditemukan' });
// const authHeader = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
// try {
// const decoded = jwt.verify(authHeader,
// process.env.JWT_SECRET);
// req.user = decoded; // simpan info user di request
// next();
// } catch (err) {
// res.status(401).json({ message: 'Token tidak valid' });
// }
// };
// module.exports = authMiddleware;

require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token tidak ditemukan' });

  // Ambil token setelah 'Bearer '
  const authHeader = token.startsWith('Bearer ') ? token.split(' ')[1] : token;

  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    req.user = decoded; // simpan info user di request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token tidak valid' });
  }
};

module.exports = authMiddleware;
