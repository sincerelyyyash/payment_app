const express = require("express")
const  router = express.Router();
const zod = require("zod")
const { User } = require("../Database/user.model.js")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
const { authMiddleware } = require("../Middleware/authMiddleware.js");
const { Accounts } = require("../Database/accounts.model.js");

const signUpBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
})



router.post('/signup', async(req,res)=>{
    const { success } = signUpBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already in use"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,    
    })

    const userId = user._id;

    await Accounts.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User registered successfully",
        token: token
    })
})

router.post('/signin', async (req,res)=> {
    const {success} = signInBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Invalid Input"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error Signing In"
    })

})


router.put("/", authMiddleware, async (req,res)=>{
    const { success } = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Updation failed"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated Successfully"
    })
})


router.get("/bulk", async (req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                '$regex' : filter
            }
        },{
            lastname:{
                "$regex" : filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})






module.exports = router;