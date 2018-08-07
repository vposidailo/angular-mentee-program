const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {

  router.get('/courses', (req, res, next) => {

      let courseDB = server.db.getState().courses;

      let courses = req.query['searchText'] ? courseDB.filter((course) => {
          return course.Title.toUpperCase().indexOf(req.query['searchText'].toUpperCase()) >= 0;
      }) : courseDB;

      courses = courses.slice(0, req.query['page'] * req.query['count']);
      
      const responseObject = {
        courses: courses,
        canLoadMore: courseDB.length > req.query['page'] * req.query['count']
      };

      res.json(responseObject);
  });

  router.delete('/courses', (req, res, next) => {

      let courseDB = server.db.getState().courses;

      const removedItemIndex = courseDB.findIndex(arrItem => arrItem.id === req.query['id']);
      courseDB.splice(removedItemIndex, 1);

      const responseObject = {
        courses: courseDB,
      };

      res.json(responseObject);
  });

    return router;
};
