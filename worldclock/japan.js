import { gmtClock$, timestampText, HR_SECOND } from './main.js'
const { map } = rxjs;

gmtClock$.pipe(
	map(t => t + 9 * HR_SECOND)
).subscribe(time => {
	const el = document.getElementById('japan')
	el.innerHTML = timestampText(time);
})
