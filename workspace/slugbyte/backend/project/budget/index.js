const {Router} = require('express');

const budgetRouter = module.exports = new Router();

budgetRouter.use(require('./route/profile-route.js'));
budgetRouter.use(require('./route/expence-route.js'));
