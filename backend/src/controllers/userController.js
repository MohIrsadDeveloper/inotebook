const userModel = require('../models/User')
const bcrypt = require("bcryptjs");



const Register = async (req, res) => {
    const { name, email, password } = req.body;
    let hashPassword = await bcrypt.hash(req.body.password, 12);
    if (!name && !email && !password) {
        res.json("Please enter a valid credential")
    } else {
        let findUser = await userModel.findOne({ email });
        if (findUser) {
            res.send("User Already Exist");
        }
        else {
            let saveUser = await userModel.create({
                name,
                email,
                password: hashPassword
            });
            res.json({
                msg: "Ok",
                data: saveUser
            })
        }
    }
}

const Login = async (req, res) => {
    const { email, password } = req.body;
    let findUser = await userModel.findOne({ email });
    if (!findUser) {
        res.send("User Not found Please Register First")
    } else {
        let checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) {
            res.send("Please Enter Correct Password")
        } else {
            res.json({
                message: "Login Successfully",
                data: findUser
            })
        }
    }
}


module.exports = {
    Register,
    Login,
}