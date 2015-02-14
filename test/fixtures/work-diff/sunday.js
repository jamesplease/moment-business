global.fixtures = global.fixtures || {};

global.fixtures.sunday = {

  // Sunday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Sunday => Monday
  zeroWeeksSundayToMonday: {
    duration: 1,
    weekDays: 0,
    weekendDays: 1
  },

  // Sunday => Tuesday
  zeroWeeksSundayToTuesday: {
    duration: 2,
    weekDays: 1,
    weekendDays: 1
  },

  // Sunday => Wednesday
  zeroWeeksSundayToWednesday: {
    duration: 3,
    weekDays: 2,
    weekendDays: 1
  },

  // Sunday => Thursday
  zeroWeeksSundayToThursday: {
    duration: 4,
    weekDays: 3,
    weekendDays: 1
  },

  // Sunday => Friday
  zeroWeeksSundayToFriday: {
    duration: 5,
    weekDays: 4,
    weekendDays: 1
  },

  // Sunday => Saturday
  zeroWeeksSundayToSaturday: {
    duration: 6,
    weekDays: 5,
    weekendDays: 1
  },

  // Sunday => Sunday (1 week)
  oneWeekSundayToSunday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Sunday => Monday (1 week, 1 day)
  oneWeekSundayToMonday: {
    duration: 8,
    weekDays: 5,
    weekendDays: 3
  },

  // Sunday => Tuesday (1 week, 2 days)
  oneWeekSundayToTuesday: {
    duration: 9,
    weekDays: 6,
    weekendDays: 3
  },

  // Sunday => Wednesday (1 week, 3 days)
  oneWeekSundayToWednesday: {
    duration: 10,
    weekDays: 7,
    weekendDays: 3
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Sunday => Friday (1 week, 5 days)
  oneWeekSundayToFriday: {
    duration: 12,
    weekDays: 9,
    weekendDays: 3
  },

  // Sunday => Saturday (1 week, 6 days)
  oneWeekSundayToSaturday: {
    duration: 13,
    weekDays: 10,
    weekendDays: 3
  },

  // Sunday => Sunday (2 weeks)
  twoWeeksSundayToSunday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // Sunday => Monday (2 weeks, 1 day)
  twoWeeksSundayToMonday: {
    duration: 15,
    weekDays: 10,
    weekendDays: 5
  },

  // Sunday => Tuesday (2 weeks, 2 days)
  twoWeeksSundayToTuesday: {
    duration: 16,
    weekDays: 11,
    weekendDays: 5
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Sunday => Friday (2 weeks, 5 days)
  twoWeeksSundayToFriday: {
    duration: 19,
    weekDays: 14,
    weekendDays: 5
  },

  // Sunday => Saturday (2 weeks, 6 days)
  twoWeeksSundayToSaturday: {
    duration: 20,
    weekDays: 15,
    weekendDays: 5
  },

  // Sunday => Sunday (3 weeks)
  threeWeeksSundayToSunday: {
    duration: 21,
    weekDays: 15,
    weekendDays: 6
  },

  // Sunday => Monday (3 weeks, 1 day)
  threeWeeksSundayToMonday: {
    duration: 22,
    weekDays: 15,
    weekendDays: 7
  },

  // Sunday => Tuesday (3 weeks, 2 days)
  threeWeeksSundayToTuesday: {
    duration: 23,
    weekDays: 16,
    weekendDays: 7
  }
};
