describe('Rock Paper Scissors Lizard Spock Game Flow', () => {
  it('should allow a user to play a game, win, and see the score increase', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.Math, 'random').returns(0.4);
      },
    });

    cy.get('[data-cy="score-value"]').should('contain.text', '12');
    cy.get('button[aria-label="Select rock"]').should('be.visible');

    cy.get('button[aria-label="Select rock"]').click();

    cy.get('[data-cy="you-picked-label"]').should('be.visible');
    cy.get('[data-cy="the-house picked-label"]').should('be.visible');
    
    cy.get('div.bg-black.bg-opacity-25').should('be.visible');

    cy.get('[data-cy="the-house picked-label"]')
      .parent() 
      .find('img[alt="scissors"]') 
      .should('be.visible');

    cy.get('[data-cy="game-result-text"]').should('contain.text', 'YOU WIN');
    cy.get('[data-cy="score-value"]').should('contain.text', '13');

    cy.get('[data-cy="play-again-button"]').click();

    cy.get('button[aria-label="Select rock"]').should('be.visible');
    cy.get('[data-cy="score-value"]').should('contain.text', '13');
  });
});