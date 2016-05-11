# moment-business
[![Travis build status](http://img.shields.io/travis/jmeas/moment-business.svg?style=flat)](https://travis-ci.org/jmeas/moment-business)
[![Code Climate](https://codeclimate.com/github/jmeas/moment-business/badges/gpa.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Test Coverage](https://codeclimate.com/github/jmeas/moment-business/badges/coverage.svg)](https://codeclimate.com/github/jmeas/moment-business)
[![Dependency Status](https://david-dm.org/jmeas/moment-business.svg)](https://david-dm.org/jmeas/moment-business)
[![devDependency Status](https://david-dm.org/jmeas/moment-business/dev-status.svg)](https://david-dm.org/jmeas/moment-business#info=devDependencies)

Utilities for working with week days and weekend days in Moment. It assumes a Western
workweek, in which weekends are Saturday and Sunday.

*Looking for a vanilla JS version of this library? Check out
[bizniz.js](https://github.com/jmeas/bizniz.js)*

### Motivation

[Moment](http://momentjs.com/) is an indispensable tool for working with dates in Javascript, but it
doesn't supply methods for working with week days or weekend days (at least,
[not yet](https://github.com/moment/moment/issues/1947)).

This library supplies you with those missing tools.

### Why this library?

There are alternative libraries for these methods, but this one uses constant-time algorithms, not loops.
Loops are easier for a human to write, but are much slower for a computer to resolve.

### Getting Started

Install this library through npm.

```js
npm install moment-business
```

Next, import it into your project.

```js
import business from 'moment-business';

business.isWeekDay(someMoment);
```

*Note: this library is also available through Bower.*

### API

##### `weekDays( startMoment, endMoment )`

Calculate the number of week days between `startMoment` and `endMoment`. Week days are Monday through Friday.

If `endMoment` comes before `startMoment`, then this function will return a negative value.

##### `weekendDays( startMoment, endMoment )`

Calculate the number of weekend days between the moment and `otherMoment`. Weekend days are Saturday and Sunday.

If `endMoment` comes before `startMoment`, then this function will return a negative value.

##### `addWeekDays( moment, amount )`

Add week days to a moment, modifying the original moment. Returns the moment.

##### `subtractWeekDays( moment, amount )`

Subtract week days from the moment, modifying the original moment. Returns the moment.

##### `isWeekDay( moment )`

Whether or not the Moment is a week day (Monday - Friday).

##### `isWeekendDay( moment )`

Whether or not the Moment occurs on Saturday or Sunday.
