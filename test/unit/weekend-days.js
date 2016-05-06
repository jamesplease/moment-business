import 'moment';
import business from '../../src/moment-business';

var DATE_FORMAT = 'YYYY-MM-DD';
var start, endMoment, weekendDays;

describe('Weekend day count', () => {
  describe('starting at Sunday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-01', DATE_FORMAT);
    });

    _.each(fixtures.sunday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Monday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-02', DATE_FORMAT);
    });

    _.each(fixtures.monday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Tuesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-03', DATE_FORMAT);
    });

    _.each(fixtures.tuesday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Wednesday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-04', DATE_FORMAT);
    });

    _.each(fixtures.wednesday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Thursday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-05', DATE_FORMAT);
    });

    _.each(fixtures.thursday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Friday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-06', DATE_FORMAT);
    });

    _.each(fixtures.friday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });

  describe('starting at Saturday', () => {
    beforeEach(() => {
      start = moment.utc('2015-03-07', DATE_FORMAT);
    });

    _.each(fixtures.saturday, (fixture, description) => {
      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(start, endMoment);
        expect(weekendDays).to.equal(fixture.weekendDays);
      });

      it('should calculate the correct number of workdays between every two dates; ' + description, () => {
        endMoment = moment(start).utc().add(fixture.duration, 'days');
        weekendDays = business.weekendDays(endMoment, start);
        expect(weekendDays).to.equal(-fixture.weekendDays);
      });
    });
  });
});
