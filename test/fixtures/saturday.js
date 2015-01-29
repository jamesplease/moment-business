module.exports = {
  
  // Saturday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Saturday => Sunday (1 week)
  oneWeekSaturdayToSunday: {
    duration: 1,
    weekDays: 0,
    weekendDays: 1
  },

  // Saturday => Monday (1 week, 1 day)
  oneWeekSaturdayToMonday: {
    duration: 2,
    weekDays: 0,
    weekendDays: 2
  },

  // Saturday => Tuesday (1 week, 2 days)
  oneWeekSaturdayToTuesday: {
    duration: 3,
    weekDays: 1,
    weekendDays: 2
  },

  // Saturday => Wednesday (1 week, 3 days)
  oneWeekSaturdayToWednesday: {
    duration: 4,
    weekDays: 2,
    weekendDays: 2
  },

  // ...skipping ahead to the next interesting
  // datapoint

  // Saturday => Friday (1 week, 5 days)
  oneWeekSaturdayToFriday: {
    duration: 6,
    weekDays: 4,
    weekendDays: 2
  },

  // Saturday => Saturday (1 week, 6 days)
  oneWeekSaturdayToSaturday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Saturday => Sunday (2 weeks)
  twoWeeksSaturdayToSunday: {
    duration: 8,
    weekDays: 5,
    weekendDays: 3
  },

  // Saturday => Monday (2 weeks, 1 day)
  twoWeeksSaturdayToMonday: {
    duration: 9,
    weekDays: 5,
    weekendDays: 4
  },

  // Saturday => Tuesday (2 weeks, 2 days)
  twoWeeksSaturdayToTuesday: {
    duration: 10,
    weekDays: 6,
    weekendDays: 4
  },

  // ...skipping ahead to the next interesting
  // datapoint

  // Saturday => Friday (2 weeks, 5 days)
  twoWeeksSaturdayToFriday: {
    duration: 13,
    weekDays: 9,
    weekendDays: 4
  },

  // Saturday => Saturday (2 weeks, 6 days)
  twoWeeksSaturdayToSaturday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // Saturday => Sunday (3 weeks)
  threeWeeksSaturdayToSunday: {
    duration: 15,
    weekDays: 10,
    weekendDays: 5
  },

  // Saturday => Monday (3 weeks, 1 day)
  threeWeeksSaturdayToMonday: {
    duration: 16,
    weekDays: 10,
    weekendDays: 6
  },

  // Saturday => Tuesday (3 weeks, 2 days)
  threeWeeksSaturdayToTuesday: {
    duration: 17,
    weekDays: 11,
    weekendDays: 6
  }
};
