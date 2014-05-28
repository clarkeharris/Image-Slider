/* global describe, it */

(function () {
    'use strict';

    describe('slideshow() function which generates a slideshow', function () {
        it('should only accept an array for its images argument', function () {
        	var badSlideshow = function () {
        		slideshow("bad")
        	}
        	expect(badSlideshow).to.throw(Error);
        });

        it('should not accept an empty array for its images argument', function () {
        	var emptyArray = function () {
        		slideshow([])
        	}
        	expect(emptyArray).to.throw(Error);
        });

	    it('should have a transition duration', function (){ 
	    	var noDuration = function () {
	    		slideshow([""], null)
	    	}
	    	expect(noDuration).to.throw(Error);
	    });
	});
})();
