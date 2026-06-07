const cypress = require('cypress');
const path = require('path');

/**
 * Exécute les tests e2e orange.fr.
 * @param {import('cypress').CypressRunOptions} options - Options Cypress optionnelles
 * @returns {Promise<import('cypress').CypressRunResult | import('cypress').CypressFailedRunResult>}
 */
async function runTests(options = {}) {
  return cypress.run({
    project: __dirname,
    configFile: path.join(__dirname, 'cypress.config.ts'),
    spec: path.join(__dirname, 'cypress/e2e/**/*.cy.ts'),
    ...options,
  });
}

module.exports = { runTests };

// Exécution directe : node run.js
if (require.main === module) {
  runTests()
    .then((results) => {
      const failed = results.status === 'failed' || results.totalFailed > 0;
      process.exit(failed ? 1 : 0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
