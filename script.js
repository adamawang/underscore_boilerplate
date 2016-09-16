var _ = require('underscore');

var myArray = [1,2,3,4,5];

function log(item) {
  console.log(item);
}

_.each(myArray, log);