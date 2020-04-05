var converter = require('C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words');

console.log();

var countDownDate = new Date('2020-05-01 00:00:00 GMT-0500').getTime();

// var myfunc = setInterval(function() {
//   var now = new Date().getTime();
//   var timeleft = countDownDate - now;

//   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
//   var milliseconds = Math.floor(timeleft);

//   console.log(
//     converter.toWords(days) +
//       ' ' +
//       converter.toWords(hours) +
//       ' ' +
//       converter.toWords(minutes) +
//       ' ' +
//       converter.toWords(seconds) +
//       ' ' +
//       converter.toWords(milliseconds)
//   );
// }, 1);
