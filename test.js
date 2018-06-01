import test from 'ava';
import m from './index';

test('0', t => {
	t.is(m(0), "0s ")
});

test('0 time', t => {
	t.is(m(0,true), "0s ago")
});

test('60', t => {
	t.is(m(60), "1m ")
});

test('60 time', t => {
	t.is(m(60,true), "1m ago")
});

test('1810', t => {
	t.is(m(1810), "30m 10s ")
});

test('1810 time', t => {
	t.is(m(1810,true), "30m 10s ago")
});

test('3600', t => {
	t.is(m(3600), "1h ")
});

test('3600 time', t => {
	t.is(m(3600,true), "1h ago")
});

test('1M 1W 1m 10s', t => {
	t.is(m(3196870), "1M 1W 1m 10s ")
});

test('1M 1W 1m 10s time', t => {
	t.is(m(3196870, true), "1M 1W 1m 10s ago")
});

test('1527824212 ', t => {
	t.is(m(1527824212), "48Y 5M 1W 6d 3h 36m 52s ")
});

test('1527824212 time', t => {
	t.is(m(1527824212,true), "48Y 5M 1W 6d 3h 36m 52s ago")
});

test('Date ', t => {
	t.is(!!m(new Date()), true)
});

test('Date time', t => {
	t.is(!!m(new Date(),true), true)
});
