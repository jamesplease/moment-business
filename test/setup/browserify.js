var config = require('../../package.json').to5BoilerplateOptions;

global._ = require('underscore');
require('../fixtures/work-diff/sunday');
require('../fixtures/work-diff/monday');
require('../fixtures/work-diff/tuesday');
require('../fixtures/work-diff/wednesday');
require('../fixtures/work-diff/thursday');
require('../fixtures/work-diff/friday');
require('../fixtures/work-diff/saturday');
require('../fixtures/modify/add');
require('../fixtures/modify/subtract');

global.moment = require('moment');
global.mocha.setup('bdd');
global.onload = function() {
  global.mocha.checkLeaks();
  global.mocha.globals(config.mochaGlobals);
  global.mocha.run();
  require('./setup')();
};
