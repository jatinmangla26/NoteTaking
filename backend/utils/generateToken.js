const jwt = require("jsonwebtoken");
const generateToken = (id) => {
    return jwt.sign({ id }, "jatin", {
        expiresIn: "30d",
    });
};
module.exports = generateToken;
