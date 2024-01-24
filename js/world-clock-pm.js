const { interval, map, scan } = rxjs;
const timezones = [
	{id: 'greenwich', diff: 0},
	{id: 'bangkok', diff: 7 * 60 * 60},
	{id: 'japan', diff: 9 * 60 * 60},
]
let unixTimestamp = Math.floor(new Date().getTime() / 1000);

// interaval function do something
setInterval(() => {
	++unixTimestamp;
	for (const tz of timezones) {
		const el = document.getElementById(tz.id)
		el.innerHTML = datetimeText(time + tz.diff);
	}
}, 1000);

function datetimeText(time) {
	const s = time % 60
	const m = Math.floor((time / 60) % 60);
	const h = Math.floor(time / (60 * 60) % 24);
	const f0 = (t) => (t < 9 ) ? `0${t}`: t
	return `${f0(h)}:${f0(m)}:${f0(s)}`;
}
