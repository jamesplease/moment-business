global.fixtures = global.fixtures || {};

global.fixtures.monday = {

  // Monday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Monday => Tuesday
  zeroWeeksMondayToTuesday: {
    duration: 1,
    weekDays: 1,
    weekendDays: 0
  },

  // Monday => Wednesday
  zeroWeeksMondayToWednesday: {
    duration: 2,
    weekDays: 2,
    weekendDays: 0
  },

  // Monday => Thursday
  zeroWeeksMondayToThursday: {
    duration: 3,
    weekDays: 3,
    weekendDays: 0
  },

  // Monday => Friday
  zeroWeeksMondayToFriday: {
    duration: 4,
    weekDays: 4,
    weekendDays: 0
  },

  // Monday => Saturday
  zeroWeeksMondayToSaturday: {
    duration: 5,
    weekDays: 5,
    weekendDays: 0
  },

  // Monday => Sunday
  oneWeekMondayToSunday: {
    duration: 6,
    weekDays: 5,
    weekendDays: 1
  },

  // Monday => Monday (1 week)
  oneWeekMondayToMonday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Monday => Tuesday (1 week, 1 day)
  oneWeekMondayToTuesday: {
    duration: 8,
    weekDays: 6,
    weekendDays: 2
  },

  // Monday => Wednesday (1 week, 2 days)
  oneWeekMondayToWednesday: {
    duration: 9,
    weekDays: 7,
    weekendDays: 2
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Monday => Friday (1 week, 4 days)
  oneWeekMondayToFriday: {
    duration: 11,
    weekDays: 9,
    weekendDays: 2
  },

  // Monday => Saturday (1 week, 5 days)
  oneWeekMondayToSaturday: {
    duration: 12,
    weekDays: 10,
    weekendDays: 2
  },

  // Monday => Sunday (1 week, 6 days)
  twoWeeksMondayToSunday: {
    duration: 13,
    weekDays: 10,
    weekendDays: 3
  },

  // Monday => Monday (2 weeks)
  twoWeeksMondayToMonday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // Monday => Tuesday (2 weeks, 1 day)
  twoWeeksMondayToTuesday: {
    duration: 15,
    weekDays: 11,
    weekendDays: 4
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Monday => Friday (2 weeks, 4 days)
  twoWeeksMondayToFriday: {
    duration: 18,
    weekDays: 14,
    weekendDays: 4
  },

  // Monday => Saturday (2 weeks, 5 days)
  twoWeeksMondayToSaturday: {
    duration: 19,
    weekDays: 15,
    weekendDays: 4
  },

  // Monday => Sunday (2 weeks, 6 days)
  threeWeeksMondayToSunday: {
    duration: 20,
    weekDays: 15,
    weekendDays: 5
  },

  // Monday => Monday (3 weeks)
  threeWeeksMondayToMonday: {
    duration: 21,
    weekDays: 15,
    weekendDays: 6
  },

  // Monday => Tuesday (3 weeks, 1 day)
  threeWeeksMondayToTuesday: {
    duration: 22,
    weekDays: 16,
    weekendDays: 6
  }
};
