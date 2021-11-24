const router = require('express').Router();

const {
  userLogout,
  serverError,
  adminLogout,
  clientError,
  getOneProduct,
} = require('../controllers');

router.get('/products/:productId', getOneProduct);
router.get('/logout', userLogout);
router.get('/admin/logout', adminLogout);

router.use(clientError);
router.use(serverError);

module.exports = router;
