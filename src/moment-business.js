import moment from 'moment';
import containedPeriodicValues from 'contained-periodic-values';
import skippedPeriodicValues from 'skipped-periodic-values';

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

moment.fn.addWorkdays = function(count) {
  var today = this.day();
  var skippedSundays = skippedPeriodicValues(today, count, 0, 7);
  var skippedSaturdays = skippedPeriodicValues(today, count, 6, 7);
  console.log('skipped', skippedSundays, skippedSaturdays);
  return this.add(count + skippedSundays + skippedSaturdays, 'days');
};
