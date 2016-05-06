global.fixtures = global.fixtures || {};

global.fixtures.friday = {

  // Friday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Friday => Saturday
  zeroWeeksFridayToSaturday: {
    duration: 1,
    weekDays: 1,
    weekendDays: 0
  },

  // Friday => Sunday
  oneWeekFridayToSunday: {
    duration: 2,
    weekDays: 1,
    weekendDays: 1
  },

  // Friday => Monday
  oneWeekFridayToMonday: {
    duration: 3,
    weekDays: 1,
    weekendDays: 2
  },

  // Friday => Tuesday
  oneWeekFridayToTuesday: {
    duration: 4,
    weekDays: 2,
    weekendDays: 2
  },

  // Friday => Wednesday
  oneWeekFridayToWednesday: {
    duration: 5,
    weekDays: 3,
    weekendDays: 2
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Friday => Friday (1 week)
  oneWeekFridayToFriday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Friday => Saturday (1 week, 1 day)
  oneWeekFridayToSaturday: {
    duration: 8,
    weekDays: 6,
    weekendDays: 2
  },

  // Friday => Sunday (1 week, 2 days)
  twoWeeksFridayToSunday: {
    duration: 9,
    weekDays: 6,
    weekendDays: 3
  },

  // Friday => Monday (1 week, 3 days)
  twoWeeksFridayToMonday: {
    duration: 10,
    weekDays: 6,
    weekendDays: 4
  },

  // Friday => Tuesday (1 week, 4 days)
  twoWeeksFridayToTuesday: {
    duration: 11,
    weekDays: 7,
    weekendDays: 4
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Friday => Friday (2 weeks)
  twoWeeksFridayToFriday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // Friday => Saturday (2 weeks, 1 days)
  twoWeeksFridayToSaturday: {
    duration: 15,
    weekDays: 11,
    weekendDays: 4
  },

  // Friday => Sunday (2 weeks, 2 days)
  threeWeeksFridayToSunday: {
    duration: 16,
    weekDays: 11,
    weekendDays: 5
  },

  // Friday => Monday (2 weeks, 3 days)
  threeWeeksFridayToMonday: {
    duration: 17,
    weekDays: 11,
    weekendDays: 6
  },

  // Friday => Tuesday (2 weeks, 4 days)
  threeWeeksFridayToTuesday: {
    duration: 18,
    weekDays: 12,
    weekendDays: 6
  }
};
