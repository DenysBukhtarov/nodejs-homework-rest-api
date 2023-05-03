const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../db/models/usersModels");

const { HttpError, ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use");
    }

    const hashPaswword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPaswword });

    return res.status(201).json({
        user: {
            email: newUser.email,
            subscrition: newUser.subscrition,
        },
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(409, "Email or passworf is wrong");
    }

    const paswwordCompare = await bcrypt.compare(password, user.password);

    if (!paswwordCompare) {
        throw HttpError(401, "Email or passworf is wrong");
    }

    const payload ={
        id: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(payload.id, { token });


    res.json({
        token,
        user: {
            email,
            subscrition: user.subscrition,
        },
    });

    const getCurrent = async (req, res) => {
        const { email } = req.user;

        const user = await User.findOne({ email });
        if(!user) {
            throw HttpError(401, "Not authorized");
        }

        res.json({
            email,
            subscrition: user.subscrition,
            });
        };

        const logout = async (req, res) => {
            const { _id } = req.user;
    
            const user = await User.findOne({ _id });
            if(!user) {
                throw HttpError(401, "Not authorized");
            }

            await User.findByIdAndUpdate(_id, { token: "" });
    
            res.status(204).json();
            };


            const updateSubcription = async (req, res) => {
                const { _id, email } = req.user;
                con
        
                const user = await User.findOne({ _id });
                if(!user) {
                    throw HttpError(401, "Not authorized");
                }
    
                await User.findByIdAndUpdate(_id, { token: "" });
        
                res.status(204).json();
                }; 



        module.exports = {
            register: ctrlWrapper(register),
            login: ctrlWrapper(login),
            getCurrent: ctrlWrapper(getCurrent),
            logout: ctrlWrapper(logout),
            updateSubcription: ctrlWrapper(updateSubcription),

        }

};