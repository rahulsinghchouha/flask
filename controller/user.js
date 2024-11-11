const user = require("../model/user");
const flash = require("flash")

exports.createUser = async (req, res) => {
    const { name, password } = req.body;
    console.log("name,password",name,password);

    try {
        await user.create({
            name,
            password
        })

  req.flash('success_msg','Form Submitted Succesfully!');

     res.send("user created succesfully");

    }
    catch (error) {
        console.log("error in creating the user",error);
        req.flash('error_msg','Form submitting Error');
    }
}