const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js')

describe('Turn', function() {
  it('Should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function');
  });
});