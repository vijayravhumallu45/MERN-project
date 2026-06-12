const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

    try{

        const {name,email,password,role}=req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email, and password are required"
            });
        }

        const exist = await User.findOne({email});

        if(exist){
            return res.status(400).json({
                message:"User Already Exists"
            });
        }

        const hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashPassword,
            role
        });

        res.status(201).json({
            message: "Registration successful",
            user
        });

    }
    catch(error){
        res.status(500).json({
            message: error.message || "Registration failed"
        });
    }
    
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    const user = await User.findOne({ email });

    console.log("User Found:", user);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "smart-learning-secret",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({
      database: User.db.name,
      collection: User.collection.name,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
};
