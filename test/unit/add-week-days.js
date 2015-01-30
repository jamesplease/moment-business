var DATE_FORMAT = 'YYYY-MM-DD';

describe('Adding weekdays', function() {
  describe('starting at Sunday', function() {
    beforeEach(function() {
      this.start = moment.utc('2015-03-01', DATE_FORMAT);
    });

    _.each(fixtures.sunday, function(fixture, description) {
      if (fixture.weekDays === 0 && fixture.duration !== 0) {
        return;
      } else if (fixture.duration === 7) { return; }
      it('should calculate the correct number of workdays between every two dates; ' + description, function() {
        var weekdays = fixture.duration - fixture.weekendDays;
        this.end = moment(this.start).add(fixture.duration, 'days');
        console.log(description + ' adding:', weekdays);
        console.log('workAdd:', moment(this.start).addWorkdays(weekdays).format(DATE_FORMAT));
        console.log('calculated::', this.end.format(DATE_FORMAT) + '\n');
        console.log('----');
        expect(this.start.addWorkdays(weekdays).isSame(this.end, 'day')).to.be.true;
      });
    }, this);
  });
});
