const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
    console.log(req);
    const { userName, email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.json({
                success: false,
                message: "User Already exist with the same email address"
            })
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            userName,
            email,
            password: hashPassword
        });

        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Registration successful"
        });

    } catch {
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Some error occured",
        });
    }
}


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { registerUser,loginUser };