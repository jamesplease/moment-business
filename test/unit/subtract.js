var DATE_FORMAT = 'YYYY-MM-DD';

describe('Subtracting weekdays', function() {
  describe('starting at Sunday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-04-05', DATE_FORMAT);
    });

    _.each(fixtures.subtract.sunday, function(solution, addition) {
      it('should calculate the correct number of workdays between every two dates; ' + addition, function() {
        this.solution = moment(solution, DATE_FORMAT);
        this.calculated = moment(this.start).subtractWorkdays(addition);
        console.log('wa', this.solution.format(DATE_FORMAT), this.calculated.format(DATE_FORMAT));
        expect(this.calculated.isSame(this.solution, 'day')).to.be.true;
      });
    }, this);
  });
});
