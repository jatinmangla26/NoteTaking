const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).send("User Already Exists");
    } else {
        const user = await User.create({
            name,
            email,
            password,
            pic,
        });
        if (user) {
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token: generateToken(user._id),
            });
        } else {
            return res.status(400).send("Error Occured");
        }
    }
};
const authUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password)))
        return res.status(201).json({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    else {
        return res.status(401).send("Invalid Details");
    }
};
module.exports = { registerUser, authUser };
