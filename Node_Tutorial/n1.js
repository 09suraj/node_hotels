const n2 = require('./n2')
var _ = require('lodash');

console.log("Server file is available")

var age = n2.age;

var result = n2.addnum(age+1,21);

console.log(result)

//console.log(age);

var data = ['person','person',1,2,1,2,'name','age','2']
var filter = _.uniq(data)
console.log(filter)