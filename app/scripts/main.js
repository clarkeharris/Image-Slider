var imgList = ['https://d13yacurqjgara.cloudfront.net/users/69311/screenshots/1571324/eagle.jpg', 'https://d13yacurqjgara.cloudfront.net/users/245692/screenshots/1571270/african-bookshelf.jpg', 'https://d13yacurqjgara.cloudfront.net/users/124227/screenshots/1571245/lightyear-thumbnail.jpg' ];
 
 
function render (i, fade) {	
	var url = imgList[i];
	if (fade) 
	{
		$('.slider').fadeOut(250, function() 
		{
			$('.slider').html('<img src=' +url+ ' class=img-top>');		
			$('.slider').fadeIn(250);
		});
	}
	else 
	{
		$('.slider').html('<img src=' +url+ ' class=img-top>');
	}
};

$(document).ready (function () {

	var i = 0;
	
	render(i, false);
	
	setInterval(function () {
		
		i = ++i % imgList.length;

		render(i, true);
 
		}, 5000);
})