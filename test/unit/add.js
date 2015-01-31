var DATE_FORMAT = 'YYYY-MM-DD';

describe('Adding weekdays', function() {
  describe('starting at Sunday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-01', DATE_FORMAT);
    });

    _.each(fixtures.add.sunday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Monday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-02', DATE_FORMAT);
    });

    _.each(fixtures.add.monday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        console.log(this.start.format('MM-DD'), this.solution.format('MM-DD'), this.calculated.format('MM-DD'));
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Tuesday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-03', DATE_FORMAT);
    });

    _.each(fixtures.add.tuesday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Wednesday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-04', DATE_FORMAT);
    });

    _.each(fixtures.add.wednesday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Thursday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-05', DATE_FORMAT);
    });

    _.each(fixtures.add.thursday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Friday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-06', DATE_FORMAT);
    });

    _.each(fixtures.add.friday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Saturday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-07', DATE_FORMAT);
    });

    _.each(fixtures.add.saturday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });
});
