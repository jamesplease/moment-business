var setup = require('./setup');
var config = require('../../config');

global.moment = require('moment');
require('../../src/' + config.entryFileName);
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
setup();
