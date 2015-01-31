(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["moment", "contained-periodic-values"], factory);
  } else if (typeof exports !== "undefined") {
    var moment = require("moment");
    var containedPeriodicValues = require("contained-periodic-values");
    factory(moment, containedPeriodicValues);
  } else {
    factory(root.moment, root.containedPeriodicValues);
  }
})(this, function (moment, containedPeriodicValues) {
  "use strict";

  var signPolyfill = function (x) {
    x = +x;
    if (x === 0 || isNaN(x)) {
      return x;
    }
    return x > 0 ? 1 : -1;
  };

  moment.fn.weekDays = function (start) {
    var startDay = start.day();
    var totalDays = Math.abs(this.diff(start, "days"));
    var containedSundays = containedPeriodicValues(startDay, totalDays + startDay, 0, 7);
    var containedSaturdays = containedPeriodicValues(startDay, totalDays + startDay, 6, 7);
    return totalDays - (containedSaturdays + containedSundays);
  };

  moment.fn.weekendDays = function (start) {
    return Math.abs(this.diff(start, "days")) - this.weekDays(start);
  };

  moment.fn.addWorkDays = function (count) {
    if (count === 0) {
      return this;
    }

    var sign = signPolyfill(count);
    var day = this.day();
    var absIncrement = Math.abs(count);

    var days = 0;

    if (day === 0 && sign === -1) {
      days = 1;
    } else if (day === 6 && sign === 1) {
      days = 1;
    }

    // Add padding for weekends.
    var paddedAbsIncrement = absIncrement;
    if (day !== 0 && day !== 6 && sign > 0) {
      paddedAbsIncrement += day;
    } else if (day !== 0 && day !== 6 && sign < 0) {
      paddedAbsIncrement += 6 - day;
    }
    var weekendsInbetween = Math.max(Math.floor(paddedAbsIncrement / 5) - 1, 0) + (paddedAbsIncrement > 5 && paddedAbsIncrement % 5 > 0 ? 1 : 0);

    // Add the increment and number of weekends.
    days += absIncrement + weekendsInbetween * 2;

    this.add(sign * days, "days");
    return this;
  };

  // The inverse of adding
  moment.fn.subtractWorkDays = function (count) {
    return this.addWorkDays(-count);
  };
});
//# sourceMappingURL=moment-business.js.map