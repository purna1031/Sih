import bcrypt from 'bcryptjs';
import Admin from '../models/AdminSchema.js';
import jwt from 'jsonwebtoken';
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, events} = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

     
        const newAdmin = new Admin({
            name,
            email,
            password: passwordHash,
            events,
        });
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;


        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: "Admin does not exist" });
        }

   
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

       
        const token = jwt.sign({ id: admin._id }, process.env.SECRET);

     
        const adminWithoutPassword = user.toObject();
        delete adminWithoutPassword.password;

        res.status(200).json({ token, admin: adminWithoutPassword });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};
