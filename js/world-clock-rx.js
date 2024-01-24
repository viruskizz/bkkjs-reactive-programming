const { interval, of, map, scan, tap, switchMap, from } = rxjs;
const timezones = [
	{id: 'greenwich', diff: 0},
	{id: 'bangkok', diff: 7 * 60 * 60},
	{id: 'japan', diff: 9 * 60 * 60},
]
let unixTimestamp = Math.floor(new Date().getTime() / 1000);

// Emit current unixtimestamp every second
const gmtTime$ = interval(1000).pipe(scan(ts => ++ts, unixTimestamp));
for (const tz of timezones) {
	// single subscription per element
	gmtTime$.pipe().subscribe(time => {
		const el = document.getElementById(tz.id)
		el.innerHTML = datetimeText(time + tz.diff);
	})
}
/**
 * 1 data stream split to 3 data stream
 */
// gmtTime$.pipe(
// 	switchMap(time => from(timezones).pipe(map(tz => ({...tz, time}))))
// ).subscribe(tz => {
// 	const el = document.getElementById(tz.id)
// 	el.innerHTML = datetimeText(tz.time + tz.diff);
// });

function datetimeText(time) {
	const s = time % 60
	const m = Math.floor((time / 60) % 60);
	const h = Math.floor(time / (60 * 60) % 24);
	const f0 = (t) => (t < 9 ) ? `0${t}`: t
	return `${f0(h)}:${f0(m)}:${f0(s)}`;
}
