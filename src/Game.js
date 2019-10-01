const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.cards = [];
    this.createCards(prototypeQuestions);
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound(round) {
    return util.getRound(round)
  }

  createCards(prototypeQuestions) {
    console.log(this.deck)
    prototypeQuestions.forEach(card => this.createCard(card));
  }
  
  createCard(card) {
    this.cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer));
  } 
}

module.exports = Game;