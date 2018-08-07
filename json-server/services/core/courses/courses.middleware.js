const express = require('express');
const router = express.Router();
const url = require('url');

let failedRequestsCount = 0;

module.exports = (server) => {
  let courseDB = server.db.getState().courses;

  router.get('/courses', (req, res, next) => {

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

      const removedItemIndex = courseDB.findIndex(arrItem => arrItem.id.toString() === req.query['id']);
      courseDB.splice(removedItemIndex, 1);

      const responseObject = {
        removedItemIndex: removedItemIndex
      };

      res.json(responseObject);
  });

    return router;
};
