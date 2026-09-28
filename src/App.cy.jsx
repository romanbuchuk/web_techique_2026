import { mount } from 'cypress/react';
import App from './App.jsx';

describe('App component', () => {
  it('renders the starter content and increments the counter', () => {
    mount(<App />);

    cy.contains('h1', 'Get started').should('be.visible');
    cy.contains('button', 'Count is 0').click();
    cy.contains('button', 'Count is 1').should('be.visible');
  });
});
