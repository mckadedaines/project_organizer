const validator = require('../helpers/validate');

const saveTask = (req, res, next) => {
    const validationRule = {
        id: 'required|string',
        title: 'required|string',
        status: 'required|string',
        dueDate: 'required|string',
        category: 'required|string',
        frequency: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveUser = (req, res, next) => {
    const validationRule = {
        userId: 'required|string',
        name: 'required|string',
        email: 'required|string',
        password: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveTask, saveUser
};