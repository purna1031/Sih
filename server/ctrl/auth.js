import bcrypt from 'bcryptjs';
import User from '../models/UserSchema.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { name, rollno, email, password, posts, answers,role } = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

     
        const newUser = new User({
            name,
            rollno,
            email,
            password: passwordHash,
            posts,
            role,
            answers,
        });

        
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

   
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

       
        const token = jwt.sign({ id: user._id }, process.env.SECRET);

     
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(200).json({ token, user: userWithoutPassword });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
