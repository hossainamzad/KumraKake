-- foods_dev;

-- DROP TABLE types CASCADE;
-- CREATE TABLE types (
--   id SERIAL PRIMARY KEY,
--   type_name VARCHAR(255)
-- );

-- DROP TABLE food_list CASCADE;
-- CREATE TABLE food_list (
--   id SERIAL PRIMARY KEY,
--   food_name VARCHAR(255),
--   price DECIMAL,
--   type_id integer references types(id)
-- );

-- DROP TABLE IF EXISTS orders;
-- CREATE TABLE orders (
--   id SERIAL PRIMARY KEY,
--   order_name VARCHAR(255),
--   totalPrice DECIMAL,
--   date_created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- DROP TABLE IF EXISTS order_items;
-- CREATE TABLE order_items (
--   id SERIAL PRIMARY KEY,
--   fooditem_id integer references food_list(id)
-- );
DROP TABLE price;
CREATE TABLE price(
id SERIAL PRIMARY KEY,
cost DECIMAL
);


DROP TABLE food;
CREATE TABLE food(
id SERIAL PRIMARY KEY,
name TEXT,
type TEXT,
nutrition TEXT,
cost DECIMAL
);

