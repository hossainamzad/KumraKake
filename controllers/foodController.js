const appDB = require('../models/appDB');
module.exports = {

  makeBlankFood(req, res, next) {
    const blankQuote = {
      id:         null,
      name:    null,
      type:     null,
      nutrition: null,
      cost: null,
    };
    res.locals.food = blankFood;
    next();
  },

 index(req, res, next) {
    appDB.findAll()
      .then((foods) => {
        res.locals.foods = foods;
        next();
      })
      .catch(err => next(err));
  },
  getOne(req, res, next) {
    appDB.findById(req.params.id)
      .then((food) => {
        res.locals.food = food;
        next();
      })
      .catch(err => next(err));
  },

    create(req, res, next) {
    appDB.save(req.body)
      .then((food) => {
        res.locals.food = food;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    appDB.update(req.body)
      .then((food) => {
        res.locals.food = food;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    appDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  }
};
