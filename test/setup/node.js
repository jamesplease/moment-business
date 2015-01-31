var setup = require('./setup');
var config = require('../../config');
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
require('../../src/' + config.entryFileName);
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
setup();
