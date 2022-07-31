// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const test = data.species.filter((animal) => animal.availability.includes('Sunday'))
//   .map((element) => element.name);
// console.log(test);

const { hours } = data;
const weekDays = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Tuesday'))
      .map((element) => element.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Wednesday'))
      .map((element) => element.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Thursday'))
      .map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Friday'))
      .map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Saturday'))
      .map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: data.species.filter((animal) => animal.availability.includes('Sunday'))
      .map((element) => element.name),
  },
};
// console.log(weekDays);

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (data.species.some((animal) => animal.name === scheduleTarget)) {
    const checkName = data.species.find((element) => element.name === scheduleTarget).availability;
    return checkName;
  }
  if (Object.keys(weekDays).some((day) => day === scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = weekDays[scheduleTarget];
    return result;
  }
  return weekDays;
}
// console.log(getSchedule('tigers'));
module.exports = getSchedule;
