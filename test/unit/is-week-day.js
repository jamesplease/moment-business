import 'moment';
import business from '../../src/moment-business';

var DATE_FORMAT = 'YYYY-MM-DD';
var day;

describe('isWeekDay', () => {
  describe('Monday', () => {
    beforeEach(() => {
      day = moment('2015-03-02', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(business.isWeekDay(day)).to.be.true;
    });
  });

  describe('Tuesday', () => {
    beforeEach(() => {
      day = moment('2015-03-03', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(business.isWeekDay(day)).to.be.true;
    });
  });

  describe('Wednesday', () => {
    beforeEach(() => {
      day = moment('2015-03-04', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(business.isWeekDay(day)).to.be.true;
    });
  });

  describe('Thursday', () => {
    beforeEach(() => {
      day = moment('2015-03-05', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(business.isWeekDay(day)).to.be.true;
    });
  });

  describe('Friday', () => {
    beforeEach(() => {
      day = moment('2015-03-06', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(business.isWeekDay(day)).to.be.true;
    });
  });

  describe('Saturday', () => {
    beforeEach(() => {
      day = moment('2015-03-07', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(business.isWeekDay(day)).to.be.false;
    });
  });

  describe('Sunday', () => {
    beforeEach(() => {
      day = moment('2015-03-08', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(business.isWeekDay(day)).to.be.false;
    });
  });
});
