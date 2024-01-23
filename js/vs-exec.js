var promise = new Promise(resolve => {
	console.log('construct promise');
	resolve("pm: Good Geek Club");
});

var observable$ = new rxjs.Observable(observer => {
	console.log('construct observable');
	observer.next("rx: Good Geek Club");
	observer.complete();
});
