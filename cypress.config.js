const { defineConfig } = require('cypress')
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  projectId: 'DemoHere',
  watchForFileChanges: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 50000,
  responseTimeout: 50000,
  pageLoadTimeout: 60000,
  execTimeout: 60000,
  taskTimeout: 60000,
 
  trashAssetsBeforeRuns: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  

  on('task', {
    log(message) {
      console.log(message)
      return null
    },
    table(message) {
      console.table(message)
      return null
    }
  })
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
})


