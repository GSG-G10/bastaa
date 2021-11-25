const findProductById = require('./find-product-by-id');
const getLandingProducts = require('./get-landing-products');
const getProductsBySection = require('./get-products-by-section');
const getAllProducts = require('./get-all-approved-products');
const newFavorites = require('./newFavorites');
const getDashboardProductsQuery = require('./get-dashboard-products');
const profileProductsQuery = require('./profile-products-query');

module.exports = {
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  newFavorites,
  profileProductsQuery,
  getDashboardProductsQuery,
};
