import { gmtClock$, timestampText, HR_SECOND } from './main.js'
const { map } = rxjs;

gmtClock$.pipe(
	map(t => t + 7 * HR_SECOND)
).subscribe(time => {
	const el = document.getElementById('bangkok')
	el.innerHTML = timestampText(time);
})
