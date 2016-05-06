import containedPeriodicValues from 'contained-periodic-values';

function determineSign(x) {
  x = +x;
  return x > 0 ? 1 : -1;
}

export default {
  weekDays(startMoment, endMoment) {
    const startDay = startMoment.day();
    const totalDays = Math.abs(endMoment.diff(startMoment, 'days'));
    const containedSundays = containedPeriodicValues(startDay, totalDays + startDay, 0, 7);
    const containedSaturdays = containedPeriodicValues(startDay, totalDays + startDay, 6, 7);
    return totalDays - (containedSaturdays + containedSundays);
  },

  weekendDays(startMoment, endMoment) {
    const totalDaysDiff = Math.abs(endMoment.diff(startMoment, 'days'));
    const weekDays = this.weekDays(startMoment, endMoment);
    return totalDaysDiff - weekDays;
  },

  addWeekDays(moment, amount) {
    if (amount === 0 || isNaN(amount)) { return moment; }

    var sign = determineSign(amount);
    var day = moment.day();
    var absIncrement = Math.abs(amount);

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
    var weekendsInbetween =
      Math.max(Math.floor(paddedAbsIncrement / 5) - 1, 0) +
      (paddedAbsIncrement > 5 && paddedAbsIncrement % 5 > 0 ? 1 : 0);

    // Add the increment and number of weekends.
    days += absIncrement + weekendsInbetween * 2;

    moment.add(sign * days, 'days');
    return moment;
  },

  subtractWeekDays(moment, amount) {
    return this.addWeekDays(moment, -amount);
  },

  isWeekDay(moment) {
    return moment.isoWeekday() < 6;
  },

  isWeekendDay(moment) {
    return moment.isoWeekday() > 5;
  }
};
