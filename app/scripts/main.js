var imgList = ['https://d13yacurqjgara.cloudfront.net/users/69311/screenshots/1571324/eagle.jpg', 'https://d13yacurqjgara.cloudfront.net/users/245692/screenshots/1571270/african-bookshelf.jpg', 'https://d13yacurqjgara.cloudfront.net/users/124227/screenshots/1571245/lightyear-thumbnail.jpg' ];
 
// function slideshow (images, duration) {
//   if (!$.isArray (images)) throw "Images is not an array";

//   if (images.length == 0) throw "Array is Empty";

//   if (!duration) throw "Duration is not defined";


//   var i = 0;

//   setInterval(function () {
//   	$('.slider').html('<img src=' +images[i]+ ' class=img-top>');	
//   	i = (i == images.length - 1) ? 0 : i += 1;
//   }, duration);

// }

// slideshow (imgList, 3000);


function SlideShow (images, duration, selector) {
  if (!$.isArray (images)) throw "Images is not an array";

  if (images.length == 0) throw "Array is Empty";

  if (!duration) throw "Duration is not defined";

this.images = images
  var i = 0;

  setInterval(function () {
  	$(selector).html('<img src=' +images[i]+ ' class=img-top>');	
  	i = (i == images.length - 1) ? 0 : i += 1;
  }, duration);

}
var SS = new SlideShow (imgList, 3000, '.slider');
var TT = new SlideShow (imgList, 1000, '.image');
var UU = new SlideShow (imgList, null, '.image');


// function render (i, fade) {	
// 	var url = imgList[i];
// 	if (fade) {
// 		$('.slider').fadeOut(250, function() {
// 			$('.slider').html('<img src=' +url+ ' class=img-top>');		
// 			$('.slider').fadeIn(250);
// 		});
// 	} else {
// 		$('.slider').html('<img src=' +url+ ' class=img-top>');
// 	}
// };

// $(document).ready (function () {

// 	var i = 0;
	
// 	render(i, false);
	
// 	setInterval(function () {
		
// 		i = ++i % imgList.length;

// 		render(i, true);
 
// 		}, 5000);
// })
//counter = (counter == imageCount-1) ? 0 : counter += 1;
