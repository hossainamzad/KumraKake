module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showFoods(req, res) {
     res.render('index', {
      data: res.locals.foods
    });
  },

  showOne(req, res) {
    res.render('single', {
     data: res.locals.food
    });
  },

  handleCreate(req, res) {
    res.redirect('/index');
  },

  handleUpdate(req, res) {
    res.redirect(`/index/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/index');
  },
  showAddForm (req, res) {
    res.render('add');
  },
  showEditForm (req, res) {
    res.render('edit', {
      data: res.locals.food,
    });
  }
};

