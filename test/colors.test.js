/* eslint-disable no-undef */
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');

const { expect } = chai;

describe('colors test', () => {
  it('should return random colors', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
  });

  it('should return colors if searched with  type name', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=name&value=gol&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return colors if name value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=name&value=zzzzz&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should return colors if searched with type hex', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=hex&value=ff&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return colors if value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=hex&value=zzzzz&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
  });

  it('should return colors if searched with type rgb', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=rgb&value=2&showing=0')
      .expect(200);
    expect(colorData.body.status).to.equal('success');
    expect(colorData.body.data).to.be.a('array');
    expect(colorData.body.data[0]).to.have.property('name');
    expect(colorData.body.data[0]).to.have.property('hex');
    expect(colorData.body.data[0]).to.have.property('rgb');
  });

  it('should not return color type if rgb value is not a Number', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=rgb&value=g&showing=0')
      .expect(400);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('rgb values are number based please input correct type');
  });

  it('should not return color type if rgb value is not found', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color?type=rgb&value=777&showing=0')
      .expect(404);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('Not Found');
  });

  it('should not return colors if type and value is not specified', async () => {
    const colorData = await request(app)
      .get('/api/v1/colors/color')
      .expect(400);
    expect(colorData.body.status).to.equal('error');
    expect(colorData.body.message).to.equal('No search criteria specified');
  });
});
