import User from "../model/user.js";

export const refrenceChecker = async (req, res) => {
    let existinguser;
  
    const {name,username,email,referrername} = res.body;
    try {
        existinguser= await User.findOne({username});
    } catch (error) {
        return console.log(error)
    }
    if(existinguser){
        return res.status(400).json({msg:"User Already Exists"})
    }

    const user = new User({name,username, email,referrername});

    try {
        await user.save();
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({user});
//     const newUser = User(user);
//     return newUser.save();
//     res.status(200).json({ msg: "User registered successfully" });
//   } catch (error) {}
  
//   res.status(500).json({ msg: "User registeration failed" });
};
