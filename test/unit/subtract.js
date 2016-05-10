import 'moment';
import business from '../../src/moment-business';

var DATE_FORMAT = 'YYYY-MM-DD';
var start, calculated;

describe('Subtracting / adding negative weekdays', () => {
  describe('starting at Sunday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-05', DATE_FORMAT);
    });

    _.each(fixtures.subtract.sunday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition + '.', () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition + '.', () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Monday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-06', DATE_FORMAT);
    });

    _.each(fixtures.subtract.monday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Tuesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-07', DATE_FORMAT);
    });

    _.each(fixtures.subtract.tuesday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Wednesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-08', DATE_FORMAT);
    });

    _.each(fixtures.subtract.wednesday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Thursday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-09', DATE_FORMAT);
    });

    _.each(fixtures.subtract.thursday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Friday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-10', DATE_FORMAT);
    });

    _.each(fixtures.subtract.friday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Saturday', () => {
    beforeEach(() => {
      start = moment.utc('2015-04-11', DATE_FORMAT);
    });

    _.each(fixtures.subtract.saturday, (solution, addition) => {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.subtractWeekDays(moment(start), addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });

      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = business.addWeekDays(moment(start), -addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });
});
