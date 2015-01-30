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
require('../../src/' + config.entryFileName);
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
setup();
