const User = require("../modal/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// register
exports.register = async (req, res) => {
    try {
        const {name, email, password, phone} = req.body
        const foundUser = await User.findOne({email})
            //email exist
        if (foundUser) {
            return res
                .status(400)
                .send({errors: [{msg: "Email already used sign with onther one idiot"}]})
        }

            //bcrypt 
        const saltRounds = 10
        const hashpassword = await bcrypt.hash(password, saltRounds)
        

            // new user
        const newUser = new User ({...req.body})
        newUser.password = hashpassword;
            // save
        await newUser.save()
            //token
        const token = jwt.sign(
            {id: newUser._id,},
            process.env.SEKRET_KEY,
            {expiresIn: "1h"}
        )
        

        res.status(200).send({msg: "register SUCC", user: newUser, token})

    } catch (error) {
        res.status(400).send({msg: "could not register :("})
    }
}


// login
exports.signin = async(req, res) => {
    try {
        const {email, password} = req.body
        const foundUser = await User.findOne({email})
        if (!foundUser) {
            return res
                .status(400)
                .send({errors: [{msg: "wrong inputs you idiot"}]})
        }
        const checkPassword = await  bcrypt.compare(password, foundUser.password)
        if (!checkPassword) {
            return res
                .status(400)
                .send({errors: [{msg: "wrong inputs you idiot"}]})
        }

        // token
        const token = jwt.sign(
            {id: foundUser._id},
            process.env.SEKRET_KEY,
            {expiredIn: "1h"}
        )


        res.status(200).send({msg: "register SUCC", user: foundUser, token})
    } catch (error) {
        res.status(400).send({msg: "could not register :("})
    }
}