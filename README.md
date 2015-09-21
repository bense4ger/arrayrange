# arrayrange

[![Build Status](https://travis-ci.org/bense4ger/arrayrange.svg?branch=master)](https://travis-ci.org/bense4ger/arrayrange) [![Coverage Status](https://coveralls.io/repos/bense4ger/arrayrange/badge.svg?branch=master&service=github)](https://coveralls.io/github/bense4ger/arrayrange?branch=master) 

A simple, lightweight utility which calculates the minimum and maximum values in an array, and the range between the values.

## Installation
```
npm install arrayrange
```

## Usage

A full guide to the API can be found [here](docs/api.md).

### Minimum value
[**arrayrange.min**](docs/api.md#minarray--number)
```javascript
var arrayRange = require('arrayrange');
var min = arrayRange.min(someArray);
```

### Maximum value
[**arrayrange.max**](docs/api.md#maxarray--number)
```javascript
var arrayRange = require('arrayrange');
var max = arrayRange.max(someArray);
```

### Range
[**arrayrange.range**](docs/api.md#rangearray--number)
```javascript
var arrayRange = require('arrayrange');
var range = arrayRange.range(someArray);
```

## Improvements

I'm planning to add the following functionality:
* Handling string arrays (min, max and range)
* Handling arrays with mixed types (in a sensible and/or customisable way)

## Contributions and Issues

If you notice any issues please log them, and contributions are always welcome.
