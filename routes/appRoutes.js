const express = require('express');
//invoke the router
const appRouter = express.Router();
const controller = require('../controllers/foodController');
const views = require('../controllers/viewsController');

// listing route in terms of specificity.
appRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);
appRouter.get('/new', views.showAddForm);

appRouter.route('/:id')
  .get(controller.getOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleDelete, views.show404);

// appRouter.route('/')
  appRouter.route('/')
  .get(controller.index, views.showFoods, views.show404)
  .post(controller.create, views.handleCreate, views.show406);


module.exports = appRouter;

// TODO: [3] list your routes in order of most specific to most general
// quotesRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);

// quotesRouter.get('/new', views.showAddForm);

// quotesRouter.route('/:id')
//   .get(controller.getOne, views.showOne, views.show404)
//   .put(controller.update, views.handleUpdate, views.show406)
//   .delete(controller.destroy, views.handleDelete, views.show404);

// quotesRouter.route('/')
//   .get(controller.index, views.showQuotes, views.show404)
//   .post(controller.create, views.handleCreate, views.show406);


// // TODO: [4] export the quotesRouter
// module.exports = quotesRouter;
