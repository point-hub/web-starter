import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import * as esbuild from '@badeball/cypress-cucumber-preprocessor/esbuild'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'http://localhost:3000',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config)
      on(
        'file:preprocessor',
        createBundler({
          plugins: [esbuild.createEsbuildPlugin(config)]
        })
      )
      return config
    }
  }
})
