const { Observable, map, delay, filter } = rxjs;
window.onload = () => {
	promise.exec();
	rx.exec();
	promise.values();
	rx.values();
	promise.opt();
	rx.opt();
}
const promise = {
	exec: () => {
		const promise = new Promise(resolve => {
			console.log('construct promise');
			appendList('pm-list-exec', 'construct promise');
			resolve("pm: Good Geek Club");
		});
	},
	values: () => {
		const promise = new Promise(resolve => {
			resolve("pm: Good Geek Club");
			resolve("pm: 42 Bangkok");
			resolve("pm: LSEG");
		});
		promise.then(res => {
			console.log(res);
			appendList('pm-list-values', res);
		});
	},
	opt: () => {
		const promise = new Promise(resolve => {
			resolve('pm: Good Geek Club');
			resolve('ft: BKK.JS');
		})
		promise
			.then(res => res.includes('pm') ? res: null)
			.then(res =>  res + ' [opt]')
			.then(res => new Promise(resolve => setTimeout(() => resolve(res), 3000)))
			.then(res => appendList('pm-list-opt', res));
	}
}
const rx = {
	exec: () => {
		const observable$ = new Observable(observer => {
			console.log('construct observable');
			appendList('rx-list-exec', 'construct observable');
			observer.next("rx: Good Geek Club");
			observer.complete();
		});
	},
	values: () => {
		const observable$ = new Observable(observer => {
			observer.next("rx: Good Geek Club");
			observer.next("rx: filter");
			observer.next("rx: 42 Bangkok");
			observer.next("rx: LSEG");
			observer.complete();
		});
		observable$.subscribe((res) => {
			console.log(res);
			appendList('rx-list-values', res);
		});
	},
	opt: () => {
		const observable$ = new Observable(observer => {
			observer.next("rx: Good Geek Club");
			observer.next("rx: 42 Bangkok");
			observer.next("ft: BKK.JS");
			observer.next("rx: LSEG");
			observer.complete();
		});
		observable$.pipe(
			filter(res => res.includes('rx')),
			map(res => res + ' [opt]'),
			delay(3000)
		).subscribe(res => appendList('rx-list-opt', res))
	}
}
function appendList(divId, data) {
	const div = document.getElementById(divId);
	const list = document.createElement('li');
	list.innerHTML = data;
	div.appendChild(list);
}