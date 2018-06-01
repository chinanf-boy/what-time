var util = require('util');

module.exports = human;

function human(seconds,isSuffix) {
  if (seconds instanceof Date)
	seconds = Math.round((Date.now() - seconds) / 1000);

	isSuffix && ( let suffix = seconds < 0 ? 'from now' : 'ago' )


  seconds = Math.abs(seconds);

  var times = [
    seconds / 60 / 60 / 24 / 365, // years
    seconds / 60 / 60 / 24 / 30,  // months
    seconds / 60 / 60 / 24 / 7,   // weeks
    seconds / 60 / 60 / 24,       // days
    seconds / 60 / 60,            // hours
    seconds / 60,                 // minutes
    seconds                       // seconds
  ];
  var names = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

  let result = ''

  for (var i = 0; i < names.length; i++) {
	if(result){
		break
	}
    var time = Math.floor(times[i]);
    if (time > 1)
      result =  util.format('%d %ss', time, names[i]);
    else if (time === 1)
      result = util.format('%d %s', time, names[i]);
  }

  !result && result = util.format('0 seconds');

  result = isSuffix ? result + ` ${suffix}` : result

  return result
}
