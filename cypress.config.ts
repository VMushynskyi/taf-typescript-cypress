import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
  
          return null
        },
      })
    },
  },
})
