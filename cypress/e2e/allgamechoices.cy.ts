const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

const testGameOutcome = (userChoice, houseChoiceIndex, expectedResult, expectedScore) => {
  cy.visit('/', {
    onBeforeLoad(win) {
      const randomValue = houseChoiceIndex / CHOICES.length;
      cy.stub(win.Math, 'random').returns(randomValue);
    },
  });

  cy.get('[data-cy="score-value"]').invoke('text').then(initialScore => {
    cy.get(`button[aria-label="Select ${userChoice}"]`).click();

    cy.get('[data-cy="you-picked-label"]').should('be.visible');
    cy.get('[data-cy="the-house picked-label"]').should('be.visible');

    cy.get('[data-cy="game-result-text"]').should('contain.text', `YOU ${expectedResult}`);

    const finalScore = expectedScore === 'increment' 
      ? parseInt(initialScore) + 1 
      : parseInt(initialScore);

    cy.get('[data-cy="score-value"]').should('contain.text', finalScore.toString());
  });
};

describe('Game Winning Logic', () => {
  it('Scissors beats Paper', () => {
    testGameOutcome('scissors', CHOICES.indexOf('paper'), 'WIN', 'increment');
  });

  it('Paper beats Rock', () => {
    testGameOutcome('paper', CHOICES.indexOf('rock'), 'WIN', 'increment');
  });

  it('Rock beats Lizard', () => {
    testGameOutcome('rock', CHOICES.indexOf('lizard'), 'WIN', 'increment');
  });

  it('Lizard beats Spock', () => {
    testGameOutcome('lizard', CHOICES.indexOf('spock'), 'WIN', 'increment');
  });

  it('Spock beats Scissors', () => {
    testGameOutcome('spock', CHOICES.indexOf('scissors'), 'WIN', 'increment');
  });

  it('Scissors beats Lizard', () => {
    testGameOutcome('scissors', CHOICES.indexOf('lizard'), 'WIN', 'increment');
  });

  it('Paper beats Spock', () => {
    testGameOutcome('paper', CHOICES.indexOf('spock'), 'WIN', 'increment');
  });

  it('Rock beats Scissors', () => {
    testGameOutcome('rock', CHOICES.indexOf('scissors'), 'WIN', 'increment');
  });

  it('Lizard beats Paper', () => {
    testGameOutcome('lizard', CHOICES.indexOf('paper'), 'WIN', 'increment');
  });

  it('Spock beats Rock', () => {
    testGameOutcome('spock', CHOICES.indexOf('rock'), 'WIN', 'increment');
  });
});