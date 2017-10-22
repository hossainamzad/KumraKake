// require pg-promise and execute it like a function
// require dbConfig file here.
const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');


// execute pgp with our dbConfig, so a connection is made
const db = pgp(dbConfig);

// export our collection of functions
module.exports = {
  findAll() {
    return db.many(`
      SELECT *
        FROM food
    ORDER BY id
    `);
  },
  findById(id) {
    return db.one(`
      SELECT *
        FROM food
       WHERE id = $1
    `, id);
  },

    save(food) {
    console.log(food);
    return db.one(`
      INSERT INTO food
      (name, type, nutrition, cost)
      VALUES
      ($/name/, $/type/, $/nutrition/, $/cost/)
      RETURNING *
    `, food);
  },

    update(food) {
    return db.one(`
      UPDATE food
      SET
      name = $/name/,
      type = $/type/,
      nutrition = $/nutrition/,
      cost = $/cost/
      WHERE id = $/id/
      RETURNING *
    `, food);
  },

    destroy(id) {
    return db.none(`
      DELETE
        FROM food
       WHERE id = $1
    `, id);
  },
}
