const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')

describe('Deck', function() {
  it('Should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  
});