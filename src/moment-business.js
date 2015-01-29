import moment from 'moment';
import containedPeriodicValues from 'contained-periodic-values';

moment.fn.weekDays = function(start) {
  var startDay = start.day();
  var totalDays = Math.abs(this.diff(start, 'days'));

  var containedSundays = containedPeriodicValues(startDay, totalDays + startDay, 0, 7);
  var containedSaturdays = containedPeriodicValues(startDay, totalDays + startDay, 6, 7);

  return totalDays - (containedSaturdays + containedSundays);
};

moment.fn.weekendDays = function(start) {
  // Total days - week days
  return Math.abs(this.diff(start, 'days')) - this.weekDays(start);
};
