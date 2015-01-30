var setup = require('./setup');
var config = require('../../config');
global._ = require('underscore');
require('../fixtures/sunday');
require('../fixtures/monday');
require('../fixtures/tuesday');
require('../fixtures/wednesday');
require('../fixtures/thursday');
require('../fixtures/friday');
require('../fixtures/saturday');

global.moment = require('moment');
require('../../tmp/__entry');
global.mocha.setup('bdd');
global.onload = function() {
  global.mocha.checkLeaks();
  global.mocha.globals(config.mochaGlobals);
  global.mocha.run();
  setup();
};
