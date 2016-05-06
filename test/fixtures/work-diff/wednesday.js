global.fixtures = global.fixtures || {};

global.fixtures.wednesday = {

  // Wednesday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Wednesday => Thursday
  zeroWeeksWednesdayToThursday: {
    duration: 1,
    weekDays: 1,
    weekendDays: 0
  },

  // Wednesday => Friday
  zeroWeeksWednesdayToFriday: {
    duration: 2,
    weekDays: 2,
    weekendDays: 0
  },

  // Wednesday => Saturday
  zeroWeeksWednesdayToSaturday: {
    duration: 3,
    weekDays: 3,
    weekendDays: 0
  },

  // Wednesday => Sunday
  oneWeekWednesdayToSunday: {
    duration: 4,
    weekDays: 3,
    weekendDays: 1
  },

  // Wednesday => Monday
  oneWeekWednesdayToMonday: {
    duration: 5,
    weekDays: 3,
    weekendDays: 2
  },

  // Wednesday => Tuesday
  oneWeekWednesdayToTuesday: {
    duration: 6,
    weekDays: 4,
    weekendDays: 2
  },

  // Wednesday => Wednesday (1 week)
  oneWeekWednesdayToWednesday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Wednesday => Friday (1 week, 2 days)
  oneWeekWednesdayToFriday: {
    duration: 9,
    weekDays: 7,
    weekendDays: 2
  },

  // Wednesday => Saturday (1 week, 3 days)
  oneWeekWednesdayToSaturday: {
    duration: 10,
    weekDays: 8,
    weekendDays: 2
  },

  // Wednesday => Sunday (1 week, 4 days)
  twoWeeksWednesdayToSunday: {
    duration: 11,
    weekDays: 8,
    weekendDays: 3
  },

  // Wednesday => Monday (1 week, 5 days)
  twoWeeksWednesdayToMonday: {
    duration: 12,
    weekDays: 8,
    weekendDays: 4
  },

  // Wednesday => Tuesday (1 week, 6 days)
  twoWeeksWednesdayToTuesday: {
    duration: 13,
    weekDays: 9,
    weekendDays: 4
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Wednesday => Friday (2 weeks, 2 days)
  twoWeeksWednesdayToFriday: {
    duration: 16,
    weekDays: 12,
    weekendDays: 4
  },

  // Wednesday => Saturday (2 weeks, 3 days)
  twoWeeksWednesdayToSaturday: {
    duration: 17,
    weekDays: 13,
    weekendDays: 4
  },

  // Wednesday => Sunday (2 weeks, 4 days)
  threeWeeksWednesdayToSunday: {
    duration: 18,
    weekDays: 13,
    weekendDays: 5
  },

  // Wednesday => Monday (2 weeks, 5 days)
  threeWeeksWednesdayToMonday: {
    duration: 19,
    weekDays: 13,
    weekendDays: 6
  },

  // Wednesday => Tuesday (2 weeks, 6 days)
  threeWeeksWednesdayToTuesday: {
    duration: 20,
    weekDays: 14,
    weekendDays: 6
  }
};
