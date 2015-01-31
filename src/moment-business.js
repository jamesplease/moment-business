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
  return Math.abs(this.diff(start, 'days')) - this.weekDays(start);
};

moment.fn.addWorkDays = function(count) {
  if (count === 0) { return this; }

  var positive = count > 0;

  // Support negative and positive values
  var methodName = positive ? 'add' : 'subtract';
  count = Math.abs(count);

  var destination = moment(this);
  var i = 0;
  while(i < count) {
    destination[methodName](1, 'days');
    if (positive && destination.day() > 1) {
      i += 1;
    } else if (!positive && destination.isoWeekday() < 6) {
      i += 1;
    }
  }

  this.add(destination.diff(this, 'days'), 'days');
  return this;
};

// The inverse of adding
moment.fn.subtractWorkDays = function(count) {
  return this.addWorkDays(-count);
};
