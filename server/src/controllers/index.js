const { productToFav } = require('./products');

const {
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  getOneProduct,
  getDashboardProducts,
} = require('./products');

const {
  getUsers,
} = require('./users');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  getUsers,
  adminLogin,
  userLogout,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  getOneProduct,
  getDashboardProducts,
};
