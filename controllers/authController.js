const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");


exports.register = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, acceptedTerms } = req.body;

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
        }

        if (!acceptedTerms) {
            return res.status(400).json({ success: false, message: "You must accept the Terms & Conditions." });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email or Username already registered." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

        const user = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            acceptedTerms,
            otp,
            otpExpires
        });

        await user.save();

        
        await sendEmail(
            email,
            "Verify Your Email - OTP",
            `
                <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                <h2 style="color: #333;">Hello ${firstname} ${lastname},</h2>
                <h1 style="color:#007bff;">Your OTP is: ${otp}</h1>
                <p>This code will expire in <strong>10 minutes</strong>.</p>
                <br>
                <p style="color: #999;">If you didn’t request this, you can ignore this email.</p>
                </div>
            `
        );

        return res.status(200).json({
            success: true,
            message: "OTP sent to your email. Please verify to complete registration."
        });

    } catch (err) {
        console.error("Error in register:", err);
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }
        return res.status(500).json({
            success: false,
            message: err.message || "Something went wrong"
        });
    }
};


exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ success: false, message: "User already verified" });
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        return res.status(200).json({ success: true, message: "Email verified successfully!" });

    } catch (err) {
        console.error("Error in verifyOtp:", err);
        res.status(500).json({ success: false, message: err.message || "Something went wrong" });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        if (!user.isVerified) {
            return res.status(403).json({ success: false, message: "Please verify your email before login." });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({
            success: true,
            message: "Login successfully",
            token,
            user: {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({ success: false, message: err.message || "Something went wrong" });
    }
};
