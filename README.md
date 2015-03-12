# ReplaceCats

A JavaScript function that replaces all images on a page with cat pictures.

You can either load the script from `script.js` through the console, or you can add a new bookmark to your browser and set the link for the bookmark to the code in the script `bookmark.js`.

## Test It Out

[Replace the puppies!](javascript:(function(){var images=document.getElementsByTagName('img');var i=0;var rci = setInterval(function(){images[i].src="http://edgecats.net/?"+new Date().getTime();if(++i==images.length){clearInterval(rci);}},10);})();)

![alt text][puppy1]
![alt text][puppy2]
![alt text][puppy3]
![alt text][puppy4]
![alt text][puppy5]

Enjoy!

Created by Grant Campfield on 2/26/2015 &copy;

[puppy1]: https://github.com/gcampfield/ReplaceCats/raw/master/TestImages/puppy_1.jpg "Puppy 1"
[puppy2]: https://github.com/gcampfield/ReplaceCats/raw/master/TestImages/puppy_2.jpg "Puppy 2"
[puppy3]: https://github.com/gcampfield/ReplaceCats/raw/master/TestImages/puppy_3.jpg "Puppy 3"
[puppy4]: https://github.com/gcampfield/ReplaceCats/raw/master/TestImages/puppy_4.jpg "Puppy 4"
[puppy5]: https://github.com/gcampfield/ReplaceCats/raw/master/TestImages/puppy_5.jpg "Puppy 5"
