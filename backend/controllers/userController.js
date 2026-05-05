const userModel = require('../models/userModel');

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const upload = require('../middlewares/multer');




exports.registerController = async (req, res) => {
  const profilePicture = req.file ? req.file.filename : "";

  try {
    const { username, email, password, bio } = req.body;

    // validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
      profile: profilePicture,
      bio,
    });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "New user created",
      user,
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: "Error in register",
      error: error.message,
    });
  }
};


// //create register user
// exports.registerController = async (req, res) => {
//     const profilePicture = req.file ? req.file.filename : ""
//     try {
//         const { username, email, password, bio } = req.body;

//         //validation
//         if (!username || !email || !password) {
//             return res.status(400).send({// "400 Bad Request"  something the client sent being considered invalid or malformed. 
//                 success: false,
//                 message: 'please fill all fields'
//             });
//         }
//         //existing user
//         const existingUser = await userModel.findOne({ email })
//         if (existingUser) {
//             return res.status(401).send({//"Unauthorized,"  it lacked valid authentication credentials 
//                 success: false,
//                 message: "user already exists"
//             });
//         }
//         //password hashing
//         const hashedPassword = await bcrypt.hash(password, 10)//hashed pasword with salt 10
//         // password= hashedPassword 
//         //replace password with hashed password


//         //save new user
//         const user = new userModel({ username, email, password: hashedPassword, profile: profilePicture, bio })
//         await user.save();//wait for use to save
//         return res.status(201).send({// the request was successful and a new resource has been created as a result, 
//             success: true,
//             message: 'New User created',
//             user,//show all user
//         });
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send({// Internal Server Error  indicating a problem on the server-side
//             message: "Error In register",
//             success: false,
//             error//show all errors
//         })
//     }
// };


//get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: 'all users data',
            users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in get all users",
            error,
        })
    }
};


//login
exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: 'please provide email and password'
            })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "email is not registered"
            })
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid username or password"
            })
        }
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRETKEY, {
            expiresIn: "2d",
        });
        return res.status(200).send({
            success: true,
            message: "Login successfully",
            token,
            name: user.username,
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in Login ',
            error
        })
    }
};

//update
exports.updateProfileController = async (req, res) => {
    const { id } = req.params;
    try {
        const { username, email, bio, removeProfileImage } = req.body
        const profilePicture = req.file ? req.file.path : "";
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        // if (bio) user.bio = bio;
        //   if (bio !== undefined) { user.bio = bio; }
        if (req.body.bio !== undefined) {
    user.bio = bio === 'null' ? "" : bio; 
    user.markModified('bio');
}
        if (removeProfileImage === "true") user.profile = "";
        if (profilePicture) user.profile = profilePicture;
user.markModified('bio');
        await user.save();

        return res.status(200).send({
            success: true,
            message: 'Profile updated successfully',
            user,
        });
    } catch (error) {
        //console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error updating profile',
            error: error.message || error,
        });
    }
};

//getprofile

exports.getProfileController = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId).select("-password");

        if (!user) {
            return res.status(404).send({
                succes: false,
                message: "user not found"
            })
        }

        return res.status(200).send({
            success: true,
            user

        });
    } catch (error) {
        //console.error("Error fetching user data", error);
        return res.status(500).send({
            success: false,
            message: "Error fetching user data",
            error: error.message,
        });
    }
};
