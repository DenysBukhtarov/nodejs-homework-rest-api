const jwt = require("jsonwebtoken");
const { authenticate } = require(".");

const { User } = require("../db/models/usersModels");

const {HttpError} = require("../helpers");

const authenticate = async (req, res, next) => {
    const {authorization} = req.headers;

    if (typeof authorization === "undefined"){
        return next(HttpError(401, "Not authorized"));
    }

    const [bearer, token] = authorization.split(" ", 2);

    if (bearer !== "Bearer"){
        next(HttpError(401, "Not authorized"));
    }

    try {
        const {id } = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findByID(id);
        if (!user || !user.token || user.token !== token){
            next(HttpError(401, "Not authorized"));
        }

    req.user = user;
    next();
    } catch (error) {
        next(HttpError(401, "Not authorized"));
    }
};


module.exports = authenticate;
