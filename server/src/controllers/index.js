const { productToFav } = require('./products');

const {
  userLogout,
  adminLogout,
} = require('./auth');

const {
  getOneProduct,
  getDashboardProducts,
} = require('./products');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  userLogout,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  getOneProduct,
  getDashboardProducts,
};
