const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    html: true,
    json: false,
    inlineAssets: true,
    saveAllAttempts: false
  },
  env: {
    URL: 'https://armcareqaweb.soluntech.com/',
    NEW_ACCOUNT_FIRST_NAME: 'Simon',
    NEW_ACCOUNT_LAST_NAME: 'Cypress',
    NEW_ACCOUNT_EMAIL: 'smg1@yopmail.com',
    NEW_ACCOUNT_PASSWORD: 'Pass1234!',
    CARD_NUMBER: '4242424242424242',
    CARD_EXPIRY: '08/25',
    CARD_CVC: '123',
    NAME_ON_CARD: 's g',
    ACCOUNT_FPASSWORD_EMAIL: 'simong@yopmail.com',
    ACCOUNT_FPASSWORD_PASSWORD: 'Clave1234$',
    PLAYER_EMAIL: 'pepita@yopmail.com',
    PLAYER_PASSWORD: '1',
    NEW_PLAYER_FIRST_NAME: 'simon',
    NEW_PLAYER_LAST_NAME: 'ggg',
    NEW_PLAYER_EMAIL: 'smgf1@yopmail.com',
    ORGANIZATION_EMAIL: 'admincentenario1@yopmail.com',
    ORGANIZATION_PASSWORD: 'armcare',
    WRONG_PASSWORD: 'wrongPassword',
    NEW_PASSWORD: 'Pass1234$'
  },
  defaultCommandTimeout: 8000
});
