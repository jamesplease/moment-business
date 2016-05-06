global.fixtures = global.fixtures || {};

global.fixtures.saturday = {

  // Saturday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Saturday => Sunday
  oneWeekSaturdayToSunday: {
    duration: 1,
    weekDays: 0,
    weekendDays: 1
  },

  // Saturday => Monday
  oneWeekSaturdayToMonday: {
    duration: 2,
    weekDays: 0,
    weekendDays: 2
  },

  // Saturday => Tuesday
  oneWeekSaturdayToTuesday: {
    duration: 3,
    weekDays: 1,
    weekendDays: 2
  },

  // Saturday => Wednesday
  oneWeekSaturdayToWednesday: {
    duration: 4,
    weekDays: 2,
    weekendDays: 2
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Saturday => Friday
  oneWeekSaturdayToFriday: {
    duration: 6,
    weekDays: 4,
    weekendDays: 2
  },

  // Saturday => Saturday (1 week)
  oneWeekSaturdayToSaturday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Saturday => Sunday (1 week, 1 day)
  twoWeeksSaturdayToSunday: {
    duration: 8,
    weekDays: 5,
    weekendDays: 3
  },

  // Saturday => Monday (1 week, 2 days)
  twoWeeksSaturdayToMonday: {
    duration: 9,
    weekDays: 5,
    weekendDays: 4
  },

  // Saturday => Tuesday (1 week, 3 days)
  twoWeeksSaturdayToTuesday: {
    duration: 10,
    weekDays: 6,
    weekendDays: 4
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Saturday => Friday (1 week, 6 days)
  twoWeeksSaturdayToFriday: {
    duration: 13,
    weekDays: 9,
    weekendDays: 4
  },

  // Saturday => Saturday (2 weeks)
  twoWeeksSaturdayToSaturday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // Saturday => Sunday (2 weeks, 1 day)
  threeWeeksSaturdayToSunday: {
    duration: 15,
    weekDays: 10,
    weekendDays: 5
  },

  // Saturday => Monday (2 weeks, 2 days)
  threeWeeksSaturdayToMonday: {
    duration: 16,
    weekDays: 10,
    weekendDays: 6
  },

  // Saturday => Tuesday (2 weeks, 3 days)
  threeWeeksSaturdayToTuesday: {
    duration: 17,
    weekDays: 11,
    weekendDays: 6
  }
};
