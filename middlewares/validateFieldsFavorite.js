const {HttpError} = require("../helpers");

const validateFieldsFavorite  = (schema) => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error) {
            next(HttpError(400, 'Must only required field favorite'));
        }
        next();
    };
    return func;
};

module.exports = validateFieldsFavorite;