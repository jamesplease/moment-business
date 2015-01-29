module.exports = function() {
  global.expect = global.chai.expect;

  global._ = require('underscore');
  global.sundayFixtures = require('../fixtures/sunday');
  global.mondayFixtures = require('../fixtures/monday');
  global.tuesdayFixtures = require('../fixtures/tuesday');
  global.wednesdayFixtures = require('../fixtures/wednesday');
  global.thursdayFixtures = require('../fixtures/thursday');
  global.fridayFixtures = require('../fixtures/friday');
  global.saturdayFixtures = require('../fixtures/saturday');

  beforeEach(function() {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy  = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function() {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
}
