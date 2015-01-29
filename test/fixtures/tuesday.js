module.exports = {
  
  // Tuesday; same day
  sameDay: {
    duration: 0,
    weekDays: 0,
    weekendDays: 0
  },

  // Tuesday => Wednesday
  zeroWeeksTuesdayToWednesday: {
    duration: 1,
    weekDays: 1,
    weekendDays: 0
  },

  // Tuesday => Thursday
  zeroWeeksTuesdayToThursday: {
    duration: 2,
    weekDays: 2,
    weekendDays: 0
  },

  // Tuesday => Friday
  zeroWeeksTuesdayToFriday: {
    duration: 3,
    weekDays: 3,
    weekendDays: 0
  },

  // Tuesday => Saturday
  zeroWeeksTuesdayToSaturday: {
    duration: 4,
    weekDays: 4,
    weekendDays: 0
  },

  // Tuesday => Sunday (1 week)
  oneWeekTuesdayToSunday: {
    duration: 5,
    weekDays: 4,
    weekendDays: 1
  },

  // Tuesday => Monday (1 week, 1 day)
  oneWeekTuesdayToMonday: {
    duration: 6,
    weekDays: 4,
    weekendDays: 2
  },

  // Tuesday => Tuesday (1 week, 2 days)
  oneWeekTuesdayToTuesday: {
    duration: 7,
    weekDays: 5,
    weekendDays: 2
  },

  // Tuesday => Wednesday (1 week, 3 days)
  oneWeekTuesdayToWednesday: {
    duration: 8,
    weekDays: 6,
    weekendDays: 2
  },

  // ...skipping ahead to the next interesting
  // datapoint

  // Tuesday => Friday (1 week, 5 days)
  oneWeekTuesdayToFriday: {
    duration: 10,
    weekDays: 8,
    weekendDays: 2
  },

  // Tuesday => Saturday (1 week, 6 days)
  oneWeekTuesdayToSaturday: {
    duration: 11,
    weekDays: 9,
    weekendDays: 2
  },

  // Tuesday => Sunday (2 weeks)
  twoWeeksTuesdayToSunday: {
    duration: 12,
    weekDays: 9,
    weekendDays: 3
  },

  // Tuesday => Monday (2 weeks, 1 day)
  twoWeeksTuesdayToMonday: {
    duration: 13,
    weekDays: 9,
    weekendDays: 4
  },

  // Tuesday => Tuesday (2 weeks, 2 days)
  twoWeeksTuesdayToTuesday: {
    duration: 14,
    weekDays: 10,
    weekendDays: 4
  },

  // ...skipping ahead to the next interesting
  // datapoint

  // Tuesday => Friday (2 weeks, 5 days)
  twoWeeksTuesdayToFriday: {
    duration: 17,
    weekDays: 13,
    weekendDays: 4
  },

  // Tuesday => Saturday (2 weeks, 6 days)
  twoWeeksTuesdayToSaturday: {
    duration: 18,
    weekDays: 14,
    weekendDays: 4
  },

  // Tuesday => Sunday (3 weeks)
  threeWeeksTuesdayToSunday: {
    duration: 19,
    weekDays: 14,
    weekendDays: 5
  },

  // Tuesday => Monday (3 weeks, 1 day)
  threeWeeksTuesdayToMonday: {
    duration: 20,
    weekDays: 14,
    weekendDays: 6
  },

  // Tuesday => Tuesday (3 weeks, 2 days)
  threeWeeksTuesdayToTuesday: {
    duration: 21,
    weekDays: 15,
    weekendDays: 6
  }
};
