import '../../src/moment-business';

var DATE_FORMAT = 'YYYY-MM-DD';
var start, calculated;

describe('Adding weekdays', () => {
  describe('starting at Sunday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-01', DATE_FORMAT);
    });

    _.each(fixtures.add.sunday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition + '.', () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.sunday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Monday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-02', DATE_FORMAT);
    });

    _.each(fixtures.add.monday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.monday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Tuesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-03', DATE_FORMAT);
    });

    _.each(fixtures.add.tuesday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.tuesday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Wednesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-04', DATE_FORMAT);
    });

    _.each(fixtures.add.wednesday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.wednesday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Thursday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-05', DATE_FORMAT);
    });

    _.each(fixtures.add.thursday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.thursday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Friday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-06', DATE_FORMAT);
    });

    _.each(fixtures.add.friday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.friday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });

  describe('starting at Saturday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-07', DATE_FORMAT);
    });

    _.each(fixtures.add.saturday, (solution, addition) => {
      it('when adding, should calculate the correct number of workdays between every two dates; ' + addition + '.', () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).addWorkDays(addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });

    _.each(fixtures.add.saturday, (solution, addition) => {
      it('when subtracting negative, should calculate the correct number of workdays between every two dates; ' + addition, () => {
        solution = moment(solution, DATE_FORMAT);
        calculated = moment(start).subtractWorkDays(-addition);
        expect(calculated.isSame(solution, 'day')).to.be.true;
      });
    });
  });
});
