const supertest = require('supertest');
const chai = require('chai');

const app = require('../src/index');

global.expect = chai.expect;
global.request = supertest(app);
