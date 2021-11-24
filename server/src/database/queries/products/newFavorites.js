const connection = require('../../connection');

const setFavorite = async (userId, productId) => {
  const inserToFavorite = () => connection.query(
    `
  INSERT INTO favourite_products 
  (user_id, product_id)
  VALUES ($1, $2)`,
    [userId, productId],
  );
  const updateLikes = () => connection.query(
    `
  UPDATE products SET likes = likes +1 WHERE  products.id = $1 RETURNING id,likes
  `,
    [productId],
  );
  await inserToFavorite;
  const { rows } = await updateLikes();
  return rows[0];
};

module.exports = setFavorite;
