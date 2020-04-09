(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):e.numberToWords=M}();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var converter = require('C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words');

var countDownDate = new Date('2020-05-01T00:00:00').getTime();

function convertAndFormat(unit) {
  var text = converter.toWords(unit);

  if (text.search(/-/g)) {
    text = text.split(/-/g);
  } else if (text.search(/\s/g)) {
    text = text.split(/\s/g);
  }
  return text;
}

var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((timeleft % (1000 * 60)) / 1000);
  // var mil = Math.floor(timeleft % 1000);
  
  var days = convertAndFormat(day);
  var hours = convertAndFormat(hour);
  var mins = convertAndFormat(min);
  var secs = convertAndFormat(sec);
  // var mils = convertAndFormat(mil);

  if (days[0] !== $('.countdown .num.day span:nth-of-type(1)').text()) {
    days[0] != null
      ? $('.countdown .num.day span:nth-of-type(1)').text(days[0])
      : $('.countdown .num.day span:nth-of-type(1)').text('');
  }
  if (hours[0] !== $('.countdown .num.hour span:nth-of-type(1)').text()) {
    hours[0] != null
      ? $('.countdown .num.hour span:nth-of-type(1)').text(hours[0])
      : $('.countdown .num.hour span:nth-of-type(1)').text('');
  }
  if (mins[0] !== $('.countdown .num.min span:nth-of-type(1)').text()) {
    mins[0] != null
      ? $('.countdown .num.min span:nth-of-type(1)').text(mins[0])
      : $('.countdown .num.min span:nth-of-type(1)').text('');
  }
  if (secs[0] !== $('.countdown .num.sec span:nth-of-type(1)').text()) {
    secs[0] != null
      ? $('.countdown .num.sec span:nth-of-type(1)').text(secs[0])
      : $('.countdown .num.sec span:nth-of-type(1)').text('');
  }

  if (days[1] !== $('.countdown .num.day span:nth-of-type(2)').text()) {
    days[1] != null
      ? $('.countdown .num.day span:nth-of-type(2)').text(days[1])
      : $('.countdown .num.day span:nth-of-type(2)').text('');
  }
  if (hours[1] !== $('.countdown .num.hour span:nth-of-type(2)').text()) {
    hours[1] != null
      ? $('.countdown .num.hour span:nth-of-type(2)').text(hours[1])
      : $('.countdown .num.hour span:nth-of-type(2)').text('');
  }
  if (mins[1] !== $('.countdown .num.min span:nth-of-type(2)').text()) {
    mins[1] != null
      ? $('.countdown .num.min span:nth-of-type(2)').text(mins[1])
      : $('.countdown .num.min span:nth-of-type(2)').text('');
  }
  if (secs[1] !== $('.countdown .num.sec span:nth-of-type(2)').text()) {
    secs[1] != null
      ? $('.countdown .num.sec span:nth-of-type(2)').text(secs[1])
      : $('.countdown .num.sec span:nth-of-type(2)').text('');
  }
}, 1000);

setTimeout(function () {
  $('.box').addClass('trans');
}, 1000);

// $('.countdown > h1 > div').css('min-width', '30vw' )

},{"C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/node_modules/number-to-words":1}]},{},[2]);
