var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('file1.txt', 'Hi' +user.username+ '!\n' ,()=> {console.log("File is Created")});