-- \c foods_dev;

INSERT INTO price (cost) VALUES
(
  10.00
);


INSERT INTO food (name, type, nutrition, cost) VALUES
(
  'Burger',
  'fast food',
  'unhealthy',
  10.00
),
(
  'pizza',
  'fast food',
  'unhealthy',
  2.00
),
(
  'salad',
  'slow food',
  'healthy',
  2.00
),
(
  'smoothie',
  'drink',
  'healthy',
  7.00
);



-- INSERT INTO types (type_name) VALUES
-- (
--   'healthy food'
-- ),
-- (
--   'junk food'
-- ),
-- (
--   'yummy food'
-- ),
-- (
--   'mixed food'
-- );
-- INSERT INTO food_list (food_name, price, type_id) VALUES
-- (
--   'Burger',
--   8,
--   1
-- ),
-- (
--   'Salad',
--   10,
--   2
-- ),
-- (
--   'Fruits-Salad',
--   12,
--   3
-- );

-- INSERT INTO orders (order_name, totalPrice, date_created) VALUES
-- (
--   'Mao',
--   10,
--   '2017-9-12'
-- ),
-- (
--   'song',
--   12,
--   '2017-9-13'
-- ),
-- (
--   'Hun',
--   8,
--   '2017-9-12'
-- );
-- INSERT INTO order_items (fooditem_id) VALUES
-- (
--   1
-- ),
-- (
--   2
-- ),
-- (
--   3
-- );

