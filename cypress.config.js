const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a9emzy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
