import moment from 'moment';
import containedPeriodicValues from 'contained-periodic-values';

moment.fn.weekDays = function(start) {
  var startDay = start.day();
  var totalDistance = this.diff(start, 'days');

  // Calculate the nearest Saturday and Sunday to our start day
  var containedSundays = containedPeriodicValues(startDay, 0, 7);
  var containedSaturdays = containedPeriodicValues(startDay, 6, 7);

  return totalDistance - containedSaturdays + containedSundays;
}

moment.fn.weekendDays = function(start) {
  var workdays = this.weekDays(start);
  var totalDistance = this.diff(start, 'days');
  return totalDistance - workDays;
}
