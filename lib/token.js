const jwt = require('jsonwebtoken');

const createJWT = (res, userId, secret, expiresIn = "24h", maxAge = 60 * 60 * 24 * 1000) => {
    const token = jwt.sign({ userId }, secret, { expiresIn });
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge // Cookie expiration in milliseconds
    });
};

module.exports = createJWT;
