const router = require('express').Router();

const {
  deleteFav,
  productToFav,
  getOneProduct,
  searchProducts,
  getLandingProducts,
  deleteProduct,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.get('/search', searchProducts);
router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/:productId', getOneProduct);

router.delete('/favorites/:productId', checkSignIn, deleteFav);
router.delete('/:productId', checkSignIn, deleteProduct);

module.exports = router;
