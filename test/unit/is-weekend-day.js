import '../../src/moment-business';

var DATE_FORMAT = 'YYYY-MM-DD';
var day;

describe('isWorkDay', () => {
  describe('Monday', () => {
    beforeEach(() => {
      day = moment('2015-03-02', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(day.isWeekendDay()).to.be.false;
    });
  });

  describe('Tuesday', () => {
    beforeEach(() => {
      day = moment('2015-03-03', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(day.isWeekendDay()).to.be.false;
    });
  });

  describe('Wednesday', () => {
    beforeEach(() => {
      day = moment('2015-03-04', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(day.isWeekendDay()).to.be.false;
    });
  });

  describe('Thursday', () => {
    beforeEach(() => {
      day = moment('2015-03-05', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(day.isWeekendDay()).to.be.false;
    });
  });

  describe('Friday', () => {
    beforeEach(() => {
      day = moment('2015-03-06', DATE_FORMAT);
    });

    it('should be false', () => {
      expect(day.isWeekendDay()).to.be.false;
    });
  });

  describe('Saturday', () => {
    beforeEach(() => {
      day = moment('2015-03-07', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(day.isWeekendDay()).to.be.true;
    });
  });

  describe('Sunday', () => {
    beforeEach(() => {
      day = moment('2015-03-08', DATE_FORMAT);
    });

    it('should be true', () => {
      expect(day.isWeekendDay()).to.be.true;
    });
  });
});
