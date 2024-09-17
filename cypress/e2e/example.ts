import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I visit homepage {string}', (path: string) => {
  cy.visit(path)
})

Then('I should see text {string}', (text: string) => {
  cy.get('body').contains(text)
})
