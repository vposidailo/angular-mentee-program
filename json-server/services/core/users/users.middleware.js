const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {

    router.get('/user', (req, res, next) => {
        const userCredential = {
              Email: 'vposidaylo@gmail.com',
              Password: '123'
        };

        if (userCredential.Email !== req.query['email']
            || userCredential.Password !== req.query['password']) {
                res.status('401').send('Unathorize');
            }

        let usersDB = server.db.getState().users;
        let user = req.query['email'] ? usersDB.filter((user) => {
            return user.Email.toUpperCase().indexOf(req.query['email'].toUpperCase()) >= 0;
        }) : userDB;
        
        res.json(user);

        // let usersDB = server.db.getState().users;

        // if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
        //     failedRequestsCount++;
        //     res.status('500').send('Something went wrong');
        // }

        // let users = req.query['textFragment'] ? usersDB.filter((user) => {
        //     return user.name.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
        // }) : usersDB;

        // users = users.slice(0, req.query['count']);

        // res.json(users);
    });

    return router;
};
