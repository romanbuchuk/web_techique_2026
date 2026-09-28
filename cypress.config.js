import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';
import viteConfig from './vite.config.js';

function setupNodeEvents(on, config) {
  registerCodeCoverageTasks(on, config);
  return config;
}

export default defineConfig({
  allowCypressEnv: false,
  expose: {
    codeCoverage: {
      expectFrontendCoverageOnly: true,
    },
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:4174',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: 'src/**/*.cy.{js,jsx}',
    supportFile: 'cypress/support/component.js',
    setupNodeEvents,
  },
});
