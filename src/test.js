// run all tests in one run. Not optimal but good enough for proof of concept
const testContext = require.context('./lib', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
