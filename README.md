# ReplaceCats

A JavaScript function that replaces all images on a page with cat pictures.

You can either load the script from `script.js` through the console, or you can add a new bookmark to your browser and set the link for the bookmark to the code in the script `bookmark.js`.

## Test It Out

[Replace the puppies!](javascript:(function(){var images=document.getElementsByTagName('img');var i=0;var rci = setInterval(function(){images[i].src="http://edgecats.net/?"+new Date().getTime();if(++i==images.length){clearInterval(rci);}},10);})();)

<img src="TestImages/puppy_1.jpg" alt="Drawing" width="300" />
<img src="TestImages/puppy_1.jpg" alt="Drawing" width="300" />
<img src="TestImages/puppy_1.jpg" alt="Drawing" width="300" />
<img src="TestImages/puppy_1.jpg" alt="Drawing" width="300" />

Enjoy!

Created by Grant Campfield on 2/26/2015 &copy;
