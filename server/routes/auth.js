const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateEmail, validatePassword } = require('../../shared-utils/validators');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

//Register route
router.post('/register', async (req, res) =>{
        try {
            const {username, email, password } = req.body;

            const existing_user = await User.findOne({email});
            if(existing_user) return res.status(400).json({message:"user already exists"});

            if(!validateEmail(email)) return res.status(400).json({error:"Invalid email "});
            if(!validatePassword(password)) return res.status(400).json({error:"Weak password"});

            const hashed = await bcrypt.hash(password, 10);
            const user = new User({username, email, password:hashed});
            await user.save();
            res.json({message:"User registered successfully"});
        } catch (err) {
            console.error('Register error:', err);
            res.status(500).json({error: err.message || 'Registration failed'});
        }
});

//Login route
router.post('/login', async (req, res) =>{
        const {email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error:"User not found"});

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return res.status(400).json({error:"Invalid password"});

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'15m'});
        res.json({token});
});

router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ message: "Welcome user", user });
});

module.exports = router;
