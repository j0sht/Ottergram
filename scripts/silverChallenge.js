// Challenge disable all links on a page
function disableAllLinks() {
    'use strict';
    var linkArray = [].slice.call(document.links);
    linkArray.forEach(function(tag) {
	tag.addEventListener('click', function(event) {
	    event.preventDefault();
	});
    });
}
