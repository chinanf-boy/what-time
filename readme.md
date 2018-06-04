# what-time [![Build Status](https://travis-ci.org/chinanf-boy/what-time.svg?branch=master)](https://travis-ci.org/chinanf-boy/what-time) [![codecov](https://codecov.io/gh/chinanf-boy/what-time/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/what-time?branch=master)

> human readable time,  inspire from https://github.com/bahamas10/human/blob/master/human.js


## Install



```
npm install what-time
```

```
yarn add what-time
```


> ⚠️

``` js
const whatTime = require('what-time');

let s = Date.now() // the number is miniseconds
// something run
let e = Date.now()

console.log(whatTime((s-e) / 1000) // whatTime is seconds , pleace  /1000

```

## Usage

```js
const whatTime = require('what-time');

whatTime(1810.999)

// "30m 10s 999ms "

whatTime(1810.999,true)

//  "30m 10s 999ms ago"


whatTime(1527824212)
//"48Y 5M 1W 6d 3h 36m 52s "


whatTime(1527824212,true)
//"48Y 5M 1W 6d 3h 36m 52s ago"


whatTime(new Date(0))

// now() -  Thu Jan 01 1970 08:00:00 GMT+0800 (CST)

```


## API

### whatTime(timeNum, isSuffix)

#### timeNum

name: | timeNum
---------|----------
Type: | `number\|Date`
Desc: | time number like Date.now().

#### isSuffix

 name: | isSuffix
---------|----------
Type: | `boolean`
Default: | `false`
Desc: | Is add the `ago`/`from now`


## use by

- [node-modules-size](https://github.com/chinanf-boy/node-modules-size)


## License

MIT © [chinanf-boy](http://llever.com)
