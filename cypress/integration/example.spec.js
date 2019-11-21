/// <reference types="cypress" />
describe('Default Test', function () {
  it('should pass', function () {
    cy.visit('/#/Greetings');
    cy.contains('Hello World');
  });
});

