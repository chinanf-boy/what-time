# what-time [![Build Status](https://travis-ci.org/chinanf-boy/what-time.svg?branch=master)](https://travis-ci.org/chinanf-boy/what-time) [![codecov](https://codecov.io/gh/chinanf-boy/what-time/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/what-time?branch=master)

> human readable time,  inspire from https://github.com/bahamas10/human/blob/master/human.js


## Install



```
npm install what-time
```

```
yarn add what-time
```




## Usage

```js
const whatTime = require('what-time');


whatTime(1810)

// "30m 10s "

whatTime(1810,true)

//  "30m 10s ago"


whatTime(1527824212)
//"48Y 5M 1W 6d 3h 36m 52s "


whatTime(1527824212,true)
//"48Y 5M 1W 6d 3h 36m 52s ago"

```


## API

### whatTime(timeNum, isSuffix)

#### timeNum

name: | timeNum
---------|----------
Type: | `number`
Desc: | time number like Date.now().

#### isSuffix

 name: | isSuffix
---------|----------
Type: | `boolean`
Default: | `false`
Desc: | Is add the `ago`/`from now`




## License

MIT © [chinanf-boy](http://llever.com)
