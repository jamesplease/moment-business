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

require('6to5/register');
global.moment = require('moment');
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
require('./setup')();
