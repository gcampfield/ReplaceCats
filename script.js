(function () {
	var images = document.getElementsByTagName('img');

	var request = new XMLHttpRequest();
	request.open("GET", "http://thecatapi.com/api/images/get?format=xml&results_per_page=20&type=png,jpg", false);
	request.send();
	var xml = request.responseXML;
	var urls = xml.getElementsByTagName("url");
	
	for (var i = 0; i <images.length; i++) {
		images[i].src = urls[i].childNodes[0].nodeValue;
	}
})();