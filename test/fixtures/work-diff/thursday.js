global.fixtures = global.fixtures || {};

global.fixtures.thursday = {

  // Thursday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Thursday => Friday
  zeroWeeksThursdayToFriday: {
    duration: 1,
    weekDays: 1,
    weekendDays: 0
  },

  // Thursday => Saturday
  zeroWeeksThursdayToSaturday: {
    duration: 2,
    weekDays: 2,
    weekendDays: 0
  },

  // Thursday => Sunday
  oneWeekThursdayToSunday: {
    duration: 3,
    weekDays: 2,
    weekendDays: 1
  },

  // Thursday => Monday
  oneWeekThursdayToMonday: {
    duration: 4,
    weekDays: 2,
    weekendDays: 2
  },

  // Thursday => Tuesday
  oneWeekThursdayToTuesday: {
    duration: 5,
    weekDays: 3,
    weekendDays: 2
  },

  // Thursday => Wednesday
  oneWeekThursdayToWednesday: {
    duration: 6,
    weekDays: 4,
    weekendDays: 2
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Thursday => Friday (1 week, 1 days)
  oneWeekThursdayToFriday: {
    duration: 8,
    weekDays: 6,
    weekendDays: 2
  },

  // Thursday => Saturday (1 week, 2 days)
  oneWeekThursdayToSaturday: {
    duration: 9,
    weekDays: 7,
    weekendDays: 2
  },

  // Thursday => Sunday (1 week, 3 days)
  twoWeeksThursdayToSunday: {
    duration: 10,
    weekDays: 7,
    weekendDays: 3
  },

  // Thursday => Monday (1 week, 4 days)
  twoWeeksThursdayToMonday: {
    duration: 11,
    weekDays: 7,
    weekendDays: 4
  },

  // Thursday => Tuesday (1 week, 5 days)
  twoWeeksThursdayToTuesday: {
    duration: 12,
    weekDays: 8,
    weekendDays: 4
  },

  // Skipping ahead to the next interesting
  // datapoint

  // Thursday => Friday (2 weeks, 1 days)
  twoWeeksThursdayToFriday: {
    duration: 15,
    weekDays: 11,
    weekendDays: 4
  },

  // Thursday => Saturday (2 weeks, 2 days)
  twoWeeksThursdayToSaturday: {
    duration: 16,
    weekDays: 12,
    weekendDays: 4
  },

  // Thursday => Sunday (2 weeks, 3 days)
  threeWeeksThursdayToSunday: {
    duration: 17,
    weekDays: 12,
    weekendDays: 5
  },

  // Thursday => Monday (2 weeks, 4 days)
  threeWeeksThursdayToMonday: {
    duration: 18,
    weekDays: 12,
    weekendDays: 6
  },

  // Thursday => Tuesday (2 weeks, 5 days)
  threeWeeksThursdayToTuesday: {
    duration: 19,
    weekDays: 13,
    weekendDays: 6
  }
};
