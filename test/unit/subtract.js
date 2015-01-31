var DATE_FORMAT = 'YYYY-MM-DD';

describe('Subtracting / adding negative weekdays', function() {
  describe('starting at Sunday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-05', DATE_FORMAT);
    });

    _.each(fixtures.subtract.sunday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.sunday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Monday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-06', DATE_FORMAT);
    });

    _.each(fixtures.subtract.monday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.monday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Tuesday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-07', DATE_FORMAT);
    });

    _.each(fixtures.subtract.tuesday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.tuesday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Wednesday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-08', DATE_FORMAT);
    });

    _.each(fixtures.subtract.wednesday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.wednesday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Thursday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-09', DATE_FORMAT);
    });

    _.each(fixtures.subtract.thursday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.thursday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Friday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-10', DATE_FORMAT);
    });

    _.each(fixtures.subtract.friday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.friday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });

  describe('starting at Saturday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-11', DATE_FORMAT);
    });

    _.each(fixtures.subtract.saturday, function(solution, addition) {
      it('when subtracting, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);

    _.each(fixtures.subtract.saturday, function(solution, addition) {
      it('when adding negative, should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).addWorkdays(-addition);
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });
});
