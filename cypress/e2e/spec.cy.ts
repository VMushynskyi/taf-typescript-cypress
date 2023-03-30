import { should } from "chai";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    const elemenet = cy.get(':nth-child(3) > .container > .row > #utilities > h2').invoke('val');

    cy.task('log', 'This will be output to the terminal === ' + elemenet);
  })
})