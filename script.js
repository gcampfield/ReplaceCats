function replaceCats () {
	var images = document.getElementsByTagName('img');
	
	var i=0;
	var replaceCatsInterval = setInterval(function () {
		images[i].src = "http://edgecats.net/?" + new Date().getTime();

		if (++i == images.length) {
			clearInterval(replaceCatsInterval);
		}
	}, 10);
}

(function () { replaceCats(); })();