module.exports = human;

function human(seconds,isSuffix) {
  if (seconds instanceof Date){
	  seconds = Math.round((Date.now() - seconds) / 1000);
	}
	if(typeof seconds != 'number'){
		throw new TypeError("need number , but got" + typeof seconds)
	}

  seconds = Math.abs(seconds);

  let names = ['Y', 'M', 'W', 'd', 'h', 'm', 's'];
  let cales = [
     60*60*24*365, // years
     60*60*24*30,  // months
     60*60*24*7,   // weeks
     60*60*24,   // days
     60*60,     // hours
     60,       // minutes
     1        // seconds
  ];

  let times = {}
  names.forEach((name,i) =>{
		let s = seconds / cales[i]
		s = Math.floor(s)
		times[name] = s
		seconds = seconds % cales[i]
  })

  let result = ''

  Object.keys(times).forEach((t,i) =>{
		let T = times[t]
	  if(T){
			result += `${T}${names[i]} `
	  }
  })

	if(seconds){
		seconds = Math.floor(seconds * 1000)
		result += `${seconds}ms `
	}

	if(!result){
		result = '0s '
	}

  let suffix
  isSuffix && ( suffix = seconds < 0 ? 'from now' : 'ago' )

  result = isSuffix ? result + `${suffix}` : result

  return result
}
