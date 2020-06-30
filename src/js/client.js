var converter = require('C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words');

var countDownDate = new Date('2020-07-15T00:00:00').getTime();

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

  var timeUnits = { day: day, hour: hour, min: min, sec: sec };

  var converted = [];

  Object.keys(timeUnits).forEach((time) => {
    converted.push(convertAndFormat(timeUnits[time]));
  });

  var i = 0;
  for (i = 0; i < 4; i++) {
    let spanTextZero = $(
      `.countdown .num.${
        Object.getOwnPropertyNames(timeUnits)[i]
      } span:nth-of-type(1)`
    );
    let spanTextOne = $(
      `.countdown .num.${
        Object.getOwnPropertyNames(timeUnits)[i]
      } span:nth-of-type(2)`
    );

    if (converted[i][0] !== spanTextZero.text()) {
      converted[i][0] != null
        ? spanTextZero.text(converted[i][0])
        : spanTextZero.text('');
    }

    if (converted[i][1] !== spanTextOne.text()) {
      converted[i][1] != null
        ? spanTextOne.text(converted[i][1])
        : spanTextOne.text('');
    }
  }
}, 1000);

setTimeout(function () {
  $('.box').addClass('trans');
}, 1000);
