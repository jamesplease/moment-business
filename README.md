# moment-business
[![Travis build status](http://img.shields.io/travis/jmeas/moment-business.svg?style=flat)](https://travis-ci.org/jmeas/moment-business)
[![Code Climate](https://codeclimate.com/github/jmeas/moment-business/badges/gpa.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Test Coverage](https://codeclimate.com/github/jmeas/moment-business/badges/coverage.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Dependency Status](https://david-dm.org/jmeas/moment-business.svg)](https://david-dm.org/jmeas/moment-business) 
[![devDependency Status](https://david-dm.org/jmeas/moment-business/dev-status.svg)](https://david-dm.org/jmeas/moment-business#info=devDependencies)

Utilities for working with week days and work days in Moment. (Western workweeks only.)

### Motivation

[Moment](http://momentjs.com/) is an indispensable tool for working with dates in Javascript. Yet it
doesn't supply methods for working with week days or weekend days (at least,
[not yet](https://github.com/moment/moment/issues/1947)).

This library supplies you with the necessary methods you need to work with western work weeks. A western
work week is a week where the weekends occur on Saturday and Sunday.

### Why this library?

There are alternative libraries for these methods, but this one supplies constant-time algorithms, whereas
others tend to rely on loops. Loops are easier for a human to write, but they are much slower for a
computer to process.

### API

#### workDays( otherMoment )

Calculate the number of work days between the moment and `otherMoment`. Work days are Monday through Friday.

#### weekendDays( otherMoment )

Calculate the number of work days between the moment and `otherMoment`. Weekend days are Saturday and Sunday.
