(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["moment", "contained-periodic-values"], factory);
  } else if (typeof exports !== "undefined") {
    var moment = require("moment");
    var containedPeriodicValues = require("contained-periodic-values");
    factory();
  } else {
    factory(root.moment, root.containedPeriodicValues);
  }
})(this, function (moment, containedPeriodicValues) {
  "use strict";

  moment.fn.weekDays = function (start) {
    var startDay = start.day();
    var totalDays = Math.abs(this.diff(start, "days"));

    var containedSundays = containedPeriodicValues(startDay, totalDays + startDay, 0, 7);
    var containedSaturdays = containedPeriodicValues(startDay, totalDays + startDay, 6, 7);

    return totalDays - (containedSaturdays + containedSundays);
  };

  moment.fn.weekendDays = function (start) {
    // Total days - week days
    return Math.abs(this.diff(start, "days")) - this.weekDays(start);
  };
});
//# sourceMappingURL=moment-business.js.map