const Turn = require('../src/Turn.js')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns])
    let correct = turn.evaluateGuess()
    if(!correct) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    }
    this.turns++
    return turn.giveFeedback()
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  endRound() {
    console.log(`** Round over! ** You answered <${this.calculatePercentCorrect()}>% of the questions correctly!`)
  }    

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    let percentCorrect = (numCorrect / this.deck.cards.length) * 100;
    return Math.floor(percentCorrect);
  }  
}

module.exports = Round;