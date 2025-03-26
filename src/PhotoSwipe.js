(function() {
	var initPhotoSwipeFromDOM = function (gallerySelector) {

		var i = 0;

		var parseThumbnailElements = function (el) {
			var thumbElements = el.querySelectorAll('a img'),
				numNodes = thumbElements.length,
				items = [],
				item;

			for (var i = 0; i < numNodes; i++) {
				item = {
					src: thumbElements[i].getAttribute('src'),
					msrc: thumbElements[i].getAttribute('src'),
					w: thumbElements[i].naturalWidth,
					h: thumbElements[i].naturalHeight,
					title: thumbElements[i].getAttribute('alt')
				};

				items.push(item);
			}

			return items;
		};

		var closest = function closest(el, fn) {
			return el && (fn(el) ? el : closest(el.parentNode, fn));
		};

		var onThumbnailsClick = function (e) {
			e = e || window.event;

			var eTarget = e.target || e.srcElement;

			var photoswipeGallery = eTarget.closest(gallerySelector);
			if (!photoswipeGallery) return;

			if (!photoswipeGallery.hasAttribute('data-pswp-uid')) {
				photoswipeGallery.setAttribute('data-pwsp-uid', ++i);
			}

			var clickedListItem = closest(eTarget, function (el) {
				return (el.tagName && el.tagName.toUpperCase() === 'IMG');
			});
			if (!clickedListItem) return;

			e.preventDefault ? e.preventDefault() : e.returnValue = false;

			var clickedGallery = photoswipeGallery,
				childNodes = clickedGallery.querySelectorAll('a img'),
				numChildNodes = childNodes.length,
				nodeIndex = 0,
				index;

			for (var i = 0; i < numChildNodes; i++) {
				if (childNodes[i].nodeType !== 1) {
					continue;
				}

				if (childNodes[i] === clickedListItem) {
					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}

			if (index >= 0) {
				openPhotoSwipe(index, clickedGallery);
			}
			return false;
		};

		var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0],
				gallery,
				options,
				items;

			items = parseThumbnailElements(galleryElement);

			options = {
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				getThumbBoundsFn: function (index) {
					var thumbnail = galleryElement.querySelectorAll('a img')[index],
						pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						rect = thumbnail.getBoundingClientRect();

					return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
				}
			};

			if (fromURL) {
				if (options.galleryPIDs) {
					for (var j = 0; j < items.length; j++) {
						if (items[j].pid == index) {
							options.index = j;
							break;
						}
					}
				} else {
					options.index = parseInt(index, 10) - 1;
				}
			} else {
				options.index = parseInt(index, 10);
			}

			if (isNaN(options.index)) {
				return;
			}

			if (disableAnimation) {
				options.showAnimationDuration = 0;
			}

			gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};

		document.addEventListener('click', onThumbnailsClick);
	};

	initPhotoSwipeFromDOM('.photoswipe-gallery');
})();
