// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar', // Make use you check the version in the folder

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  // specs: ['e2e/**/*.js'],
  suites: {
    homepage: 'e2e/homepage/**/*spec.js',
    login: 'e2e/login/**/*spec.js',
    register: 'e2e/register/**/*spec.js',
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    require('protractor-uisref-locator')(protractor);
  }
};
