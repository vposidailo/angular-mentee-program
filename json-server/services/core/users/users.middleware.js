const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {
    let usersDB = server.db.getState().users;

    router.post('/loginUser', (req, res, next) => {
        
        userCredential = usersDB.find((user) => {
            return user.userInfo.Email.toUpperCase().indexOf(req.body.email.toUpperCase()) >= 0;
        });

        if (userCredential.password !== req.body.password) {
            res.status('401').send('Incorrect user name or password!');
        }

        const responseObject = {
            isAuthenticated: true,
            userToken: userCredential.userToken
        };

        res.json(responseObject);
    });

    router.get('/userInfo', (req, res, next) => {

        userCredential = usersDB.find((user) => {
            return user.userToken.toUpperCase().indexOf(req.query['userToken'].toUpperCase()) >= 0;
        });

        // if (userCredential.userInfo.Email !== req.query['email']
        //    || userCredential.password !== req.query['password']) {
        //         res.status('401').send('Unathorize');
        // }

        const responseObject = {
            userInfo: userCredential.userInfo,
            userToken: req.query['userToken']
        };

        res.json(responseObject);
    });

    return router;
};
