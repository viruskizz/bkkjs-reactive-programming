var promise = new Promise(resolve => {
	resolve("pm: Good Geek Club");
	resolve("pm: 42 Bangkok");
	resolve("pm: LSEG");
});
promise.then(res => console.log(res));

var observable$ = new rxjs.Observable(observer => {
	observer.next("rx: Good Geek Club");
	observer.next("rx: filter");
	observer.next("rx: 42 Bangkok");
	observer.next("rx: LSEG");
	observer.complete();
});
observable$.subscribe(res => console.log(res));