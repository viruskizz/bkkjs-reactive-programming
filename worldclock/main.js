const { interval, scan } = rxjs;

/*
* Emit current unixtimestamp every second
* Create current unixtimestamp as initial value
*/
const gmtClock$ = interval(1000).pipe(
	scan(ts => ++ts, Math.floor(new Date().getTime() / 1000))
);

const HR_SECOND = 60 * 60;

const timestampText = (time) => {
	const s = time % 60
	const m = Math.floor((time / 60) % 60);
	const h = Math.floor(time / (60 * 60) % 24);
	const f0 = (t) => (t < 9 ) ? `0${t}`: t
	return `${f0(h)}:${f0(m)}:${f0(s)}`;
}

export { gmtClock$, HR_SECOND, timestampText }

/**
 * 1 data stream split to 3 data stream
 */
// gmtTime$.pipe(
// 	switchMap(time => from(timezones).pipe(map(tz => ({...tz, time}))))
// ).subscribe(tz => {
// 	const el = document.getElementById(tz.id)
// 	el.innerHTML = datetimeText(tz.time + tz.diff);
// });