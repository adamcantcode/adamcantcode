var converter = require('C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words');

var countDownDate = new Date('2020-05-01 00:00:00 GMT-0500').getTime();

var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((timeleft % (1000 * 60)) / 1000);
  var mil = Math.floor(timeleft % 1000);

  function removeDash(number) {
    var text = converter.toWords(number);
    if (text.search(/-/g)) {
      text = text.split(/-/g);
    } else if (text.search(/\s/g)) {
      text = text.split(/\s/g);
    }
    return text;
  }
  var days = removeDash(day);
  var hours = removeDash(hour);
  var mins = removeDash(min);
  var secs = removeDash(sec);
  var mils = removeDash(mil);

  days[0] != null
    ? $('.countdown .num.day span:nth-of-type(1)').text(days[0])
    : $('.countdown .num.day span:nth-of-type(1)').text('');
  hours[0] != null
    ? $('.countdown .num.hour span:nth-of-type(1)').text(hours[0])
    : $('.countdown .num.hour span:nth-of-type(1)').text('');
  mins[0] != null
    ? $('.countdown .num.min span:nth-of-type(1)').text(mins[0])
    : $('.countdown .num.min span:nth-of-type(1)').text('');
  secs[0] != null
    ? $('.countdown .num.sec span:nth-of-type(1)').text(secs[0])
    : $('.countdown .num.sec span:nth-of-type(1)').text('');
  // (mils[0] != null) ? $('.countdown .num.mil span:nth-of-type(1)').text(mils[0]) : $('.countdown .num.mil span:nth-of-type(1)').text('');

  days[1] != null
    ? $('.countdown .num.day span:nth-of-type(2)').text(days[1])
    : $('.countdown .num.day span:nth-of-type(2)').text('');
  hours[1] != null
    ? $('.countdown .num.hour span:nth-of-type(2)').text(hours[1])
    : $('.countdown .num.hour span:nth-of-type(2)').text('');
  mins[1] != null
    ? $('.countdown .num.min span:nth-of-type(2)').text(mins[1])
    : $('.countdown .num.min span:nth-of-type(2)').text('');
  secs[1] != null
    ? $('.countdown .num.sec span:nth-of-type(2)').text(secs[1])
    : $('.countdown .num.sec span:nth-of-type(2)').text('');
  // (mils[1] != null) ? $('.countdown .num.mil span:nth-of-type(2)').text(mils[1]) : $('.countdown .num.mil span:nth-of-type(2)').text('');
}, 1000);

setTimeout(function () {
  $('.box').addClass('trans');
}, 1000); 

// $('.countdown > h1 > div').css('min-width', '30vw' )
