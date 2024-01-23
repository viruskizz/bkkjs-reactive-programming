var promise = new Promise(resolve => {
	resolve('pm: Good Geek Club');
	resolve('ft: BKK.JS');
})
promise
	.then(res => res.includes('pm') ? res: null)
	.then(res =>  res + ' [opt]')
	.then(res => new Promise(resolve => setTimeout(() => resolve(res), 3000)))
	.then(res => console.log(res));


var { Observable, map, delay, filter } = rxjs;

var observable$ = new Observable(observer => {
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
).subscribe(res => console.log(res))