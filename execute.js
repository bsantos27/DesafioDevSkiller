require('newman').run({
  collection: 'devskiller-test.postman_collection.json',
  reporters: ['cli', 'junit'],
  reporter: { cli: { 'noSummary': true }, junit: { 'export': 'test-results.xml' } }
});
