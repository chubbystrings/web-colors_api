/* eslint-disable no-undef */
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');

const { expect } = chai;

describe('colors test', () => {
  it('should return 200 ok', async () => {
    const colorData = await request(app)
      .get('/')
      .expect(200);
    expect(colorData.body.message).to.equal('webcolor api server is live');
  });

  it('should return colors (random)', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
  });

  it('should return colors if searched with type name', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=name&value=gol&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return colors if name value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=name&value=zzzzz&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should return colors if searched with type hex', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=hex&value=ff&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return colors if value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=hex&value=zzzzz&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
  });

  it('should return colors if searched with type rgb', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=rgb&value=2&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return color type if rgb value is not a Number', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=rgb&value=g&showing=0')
      .expect(400);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('rgb values are number based please input correct type');
  });

  it('should not return color type if rgb value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type?type=rgb&value=777&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should not return colors if type and value is not specified', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/type')
      .expect(400);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('No search criteria specified');
  });

  it('should return error if search value contains symbols', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/search?value=g>ld')
      .expect(401);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Alphanumeric values only');
  });

  it('should return color if searched with alpanumeric values', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/search?value=22')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should return 404 error if no color found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/search?value=gols')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should return 404 error if no color with name found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?name=gols')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should return at least a color match', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?name=black')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });
});
