# moment-business
[![Travis build status](http://img.shields.io/travis/jmeas/moment-business.svg?style=flat)](https://travis-ci.org/jmeas/moment-business)
[![Code Climate](https://codeclimate.com/github/jmeas/moment-business/badges/gpa.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Test Coverage](https://codeclimate.com/github/jmeas/moment-business/badges/coverage.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Dependency Status](https://david-dm.org/jmeas/moment-business.svg)](https://david-dm.org/jmeas/moment-business) 
[![devDependency Status](https://david-dm.org/jmeas/moment-business/dev-status.svg)](https://david-dm.org/jmeas/moment-business#info=devDependencies)

Utilities for working with week days and work days in Moment. It assumes a Western workweek, wherein weekends are
Saturday and Sunday.

### Motivation

[Moment](http://momentjs.com/) is an indispensable tool for working with dates in Javascript, but it
doesn't supply methods for working with week days or weekend days (at least,
[not yet](https://github.com/moment/moment/issues/1947)).

This library supplies you with those missing tools.

### Why this library?

There are alternative libraries for these methods, but this one uses constant-time algorithms, not loops.
Loops are easier for a human to write but are much slower for a computer to resolve.

### API

##### `weekDays( otherMoment )`

Calculate the number of work days between the moment and `otherMoment`. Work days are Monday through Friday.

##### `weekendDays( otherMoment )`

Calculate the number of weekend days between the moment and `otherMoment`. Weekend days are Saturday and Sunday.

##### `addWorkDays( amount )`

Add work days to a moment, modifying the original moment. Returns the moment.

##### `subtractWorkDays( amount )`

Subtract work days from the moment, modifying the original moment. Returns the moment.

##### `isWeekDay()`

Whether or not the Moment is a week day (Monday - Friday).

##### `isWeekendDay()`

Whether or not the Moment occurs on Saturday or Sunday.
