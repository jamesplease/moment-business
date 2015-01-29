(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['moment', 'contained-periodic-values'], factory);
  } else if (typeof exports !== 'undefined') {
    var moment = require('moment');
    var containedPeriodicValues = require('contained-periodic-values');
    module.exports = factory();
  } else {
    factory(root.moment, root.containedPeriodicValues);
  }
})(this, function(moment, containedPeriodicValues) {
  'use strict';

  // @include ./moment-business.js
});
