import { gmtClock$, timestampText, HR_SECOND } from './main.js'
const { map } = rxjs;

gmtClock$.subscribe(time => {
	const el = document.getElementById('greenwich')
	el.innerHTML = timestampText(time);
})
