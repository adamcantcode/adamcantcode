var converter = require('C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words');

var countDownDate = new Date('2020-06-01T00:00:00').getTime();

function convertAndFormat(unit) {
  var text = converter.toWords(unit);

  if (text.search(/-/g)) {
    text = text.split(/-/g);
  } else if (text.search(/\s/g)) {
    text = text.split(/\s/g);
  }
  return text;
}

setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((timeleft % (1000 * 60)) / 1000);
  // var mil = Math.floor(timeleft % 1000);

  var timeUnits = [day, hour, min, sec];
  var converted = [];
  timeUnits.forEach((time) => {
    converted.push(convertAndFormat(time));
  });

  if (converted[0][0] !== $('.countdown .num.day span:nth-of-type(1)').text()) {
    converted[0][0] != null
      ? $('.countdown .num.day span:nth-of-type(1)').text(converted[0][0])
      : $('.countdown .num.day span:nth-of-type(1)').text('');
  }
  if (converted[1][0] !== $('.countdown .num.hour span:nth-of-type(1)').text()) {
    converted[1][0] != null
      ? $('.countdown .num.hour span:nth-of-type(1)').text(converted[1][0])
      : $('.countdown .num.hour span:nth-of-type(1)').text('');
  }
  if (converted[2][0] !== $('.countdown .num.min span:nth-of-type(1)').text()) {
    converted[2][0] != null
      ? $('.countdown .num.min span:nth-of-type(1)').text(converted[2][0])
      : $('.countdown .num.min span:nth-of-type(1)').text('');
  }
  if (converted[3][0] !== $('.countdown .num.sec span:nth-of-type(1)').text()) {
    converted[3][0] != null
      ? $('.countdown .num.sec span:nth-of-type(1)').text(converted[3][0])
      : $('.countdown .num.sec span:nth-of-type(1)').text('');
  }
  if (converted[0][1] !== $('.countdown .num.day span:nth-of-type(2)').text()) {
    converted[0][1] != null
      ? $('.countdown .num.day span:nth-of-type(2)').text(converted[0][1])
      : $('.countdown .num.day span:nth-of-type(2)').text('');
  }
  if (converted[1][1] !== $('.countdown .num.hour span:nth-of-type(2)').text()) {
    converted[1][1] != null
      ? $('.countdown .num.hour span:nth-of-type(2)').text(converted[1][1])
      : $('.countdown .num.hour span:nth-of-type(2)').text('');
  }
  if (converted[2][1] !== $('.countdown .num.min span:nth-of-type(2)').text()) {
    converted[2][1] != null
      ? $('.countdown .num.min span:nth-of-type(2)').text(converted[2][1])
      : $('.countdown .num.min span:nth-of-type(2)').text('');
  }
  if (converted[3][1] !== $('.countdown .num.sec span:nth-of-type(2)').text()) {
    converted[3][1] != null
      ? $('.countdown .num.sec span:nth-of-type(2)').text(converted[3][1])
      : $('.countdown .num.sec span:nth-of-type(2)').text('');
  }
}, 1000);

setTimeout(function () {
  $('.box').addClass('trans');
}, 1000);

// $('.countdown > h1 > div').css('min-width', '30vw' )
