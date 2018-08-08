const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {
    let usersDB = server.db.getState().users;

    router.get('/user', (req, res, next) => {

        userCredential = usersDB.find((user) => {
            return user.userInfo.Email.toUpperCase().indexOf(req.query['email'].toUpperCase()) >= 0;
        });

        if (userCredential.userInfo.Email !== req.query['email']
           || userCredential.password !== req.query['password']) {
                res.status('401').send('Unathorize');
        }

        const responseObject = {
            isAuthenticated: true,
            userInfo: userCredential.userInfo
        };

        res.json(responseObject);
    });

    return router;
};
