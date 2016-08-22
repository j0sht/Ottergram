var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
	event.preventDefault();
	setDetailsFromThumb(thumb);
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomThumbnailToTacoCatURL(arr) {
    'use strict';
    var i = getRandomInt(0, arr.length - 1);
    console.log("i = " + i);
    arr[i].setAttribute('data-image-url', "http://www.catsvscancer.org/wp-content/uploads/2015/04/Taco-Cat-Spelled-Backwards-Is-Taco-Cat.1.jpg");
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    // backwards-compatible node-list to array conversion
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

function randomizeTacoCatURL() {
    'use strict';
    var thumbs = getThumbnailsArray();
    thumbs.forEach(function(thumb) {
	thumb.setAttribute('data-image-url', thumb.getAttribute('href'));
    });
    setRandomThumbnailToTacoCatURL(thumbs);
}

function main() {
    initializeEvents();
    randomizeTacoCatURL();
}

// Main Entry Point
main();
