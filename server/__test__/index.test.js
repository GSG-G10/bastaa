/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies

const request = require('supertest');

const app = require('../src/app');

const dbBuild = require('../src/database/config/_build');
const connection = require('../src/database/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('Server Tests', () => {
  /// /////////////////////////////////////////////////////
  test('test 200 status /', async () => {
    const res = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Server is running',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test 404 status /notfound', async () => {
    const res = await request(app)
      .get('/api/v1/notfound')
      .expect(404)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Page Not Found!',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test user logout route /logout', async () => {
    const res = await request(app)
      .get('/api/v1/logout')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Signed out succefully',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test admin logout route /admin/logout', async () => {
    const res = await request(app)
      .get('/api/v1/admin/logout')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Signed out succefully',
    };
    return expect(expected).toEqual(res.body);
  });
  /// //////////////////////////////////////////////////////
  test('test get one product route /products/:productId', async () => {
    const res = await request(app)
      .get('/api/v1/products/1')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = 'Product found';
    return expect(expected).toEqual(res.body.message);
  });
  /// //////////////////////////////////////////////////////
  test('test get one product route error /products/:productId', async () => {
    const res = await request(app)
      .get('/api/v1/products/notfound')
      .expect(400)
      .expect('Content-Type', /json/);
    const expected = 'Bad Request';
    return expect(expected).toEqual(res.body.message);
  });
  /// //////////////////////////////////////////////////////
  test('test get dashboard products route error not auth /admin/products?status=', async () => {
    const res = await request(app)
      .get('/api/v1/admin/products?status=pending')
      .expect(401)
      .expect('Content-Type', /json/);
    const expected = 'You are not authorized to perform this action.';
    return expect(expected).toEqual(res.body.message);
  });
  /// ///////////////////////////////////////////////////////
  /// ******************* Test Delete product routes *********************/
  test('Delete product 200', async () => {
    const res = await request(app)
      .delete('/api/v1/products/48')
      .expect(200)
      .send({
        userId: 10,
      });
    return expect(res.body.message).toBe('Product Deleted Successfuly');
  });
  /// /////////////////////////////////////////////////////
  test('Delete product 400 product dosn\'t exist', async () => {
    const res = await request(app)
      .delete('/api/v1/products/900')
      .expect(400)
      .send({
        userId: 12,
      });
    return expect(res.body.message).toBe('Product Not Found');
  });
  /// ////////////////////////////////////////////
  test('Delete Product 400 Bad request', async () => {
    const res = await request(app)
      .delete('/api/v1/products/string')
      .expect(400)
      .send({
        userId: 12,
      });
    return expect(res.body.message).toBe('Bad Request');
  });
  /// /////////////////////////////
  test('Delete Product 403 Don\'t have permission', async () => {
    const res = await request(app)
      .delete('/api/v1/products/48')
      .expect(403)
      .send({
        userId: 12,
      });
    return expect(res.body.message).toBe('You don\'t have permission to delete this product');
  });
});

describe('favorites', () => {
  test('post favorites 200', async () => {
    const res = await request(app)
      .post('/api/v1//products/favorites')
      .expect(200)
      .send({
        userId: 1,
        productId: 1,
      });

    return expect(res.body.message).toEqual('Added to favorites successfully');
  });
});
