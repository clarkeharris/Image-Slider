/* global describe, it */


// [i] has to be less than the array length
// Fade needs to be a boolean value
// i has to be >= 0? 

(function () {
    'use strict';
    var i = 0;
    describe('Image Looper', function () {
        it('should loop through an array of images', function () {
        	expect(i).to.be.below(imgList.length);
        });
    });

    describe('Fade Animation', function () {
        it('should fade in and fade out after first image has loaded', function () {
        	var i = 1;
        	expect(1).to.be.true;
        });
    }); 

    describe('', function () {
        it('should run here few assertions', function () {
        	var answer = 2;
        	expect(2).to.equal(answer);
        });
    });
})();
