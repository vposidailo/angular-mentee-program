debugger;
// REWRITE EXAMPLE
const express = require('express');
const jsonServer = require('json-server');
const router = express.Router();

router.use(jsonServer.rewriter({
	'/auth/userInfo': '/auth/userInfo'
}));

module.exports = router;
