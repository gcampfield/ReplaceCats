javascript:(function(){var images=document.getElementsByTagName('img');var i=0;var rci = setInterval(function(){images[i].src="http://edgecats.net/?"+new Date().getTime();if(++i==images.length){clearInterval(rci);}},10);})();