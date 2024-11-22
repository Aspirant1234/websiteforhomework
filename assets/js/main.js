/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stops animations/transitions until the page has ...
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	var resizeTimeout;

	$window.on('resize', function() {
		$body.addClass('is-resizing');

		clearTimeout(resizeTimeout);

		resizeTimeout = setTimeout(function() {
			$body.removeClass('is-resizing');
		}, 100);
	});

	// Sidebar setup.
	var $sidebar = $('#sidebar'),
		$sidebar_inner = $sidebar.children('.inner');

	// Inactive sidebar for smaller screens.
	breakpoints.on('<=large', function() {
		$sidebar.addClass('inactive');
	});

	breakpoints.on('>large', function() {
		$sidebar.removeClass('inactive');
	});

	// Sidebar toggle behavior.
	$('<a href="#sidebar" class="toggle">Toggle</a>')
		.appendTo($sidebar)
		.on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();

			$sidebar.toggleClass('inactive');
		});

	// Menu openers.
	var $menu = $('#menu'),
		$menu_openers = $menu.children('ul').find('.opener');

	$menu_openers.each(function() {
		var $this = $(this);

		$this.on('click', function(event) {
			event.preventDefault();

			$menu_openers.not($this).removeClass('active');
			$this.toggleClass('active');

			$window.triggerHandler('resize.sidebar-lock');
		});
	});

})(jQuery);

// Create the lightbox container
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

// Add a close button to the lightbox
const closeButton = document.createElement("span");
closeButton.classList.add("close");
closeButton.innerHTML = "&times;";
lightbox.appendChild(closeButton);

// Close the lightbox when clicking outside the image or on the close button
closeButton.addEventListener("click", () => {
	lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.classList.remove("active");
	}
});

// Add event listeners to images to open them in the lightbox
document.querySelectorAll("img").forEach((img) => {
	img.addEventListener("click", () => {
		const lightboxImage = document.createElement("img");
		lightboxImage.src = img.src;

		// Clear previous content in the lightbox
		while (lightbox.childNodes.length > 1) {
			lightbox.removeChild(lightbox.lastChild);
		}

		lightbox.appendChild(lightboxImage);
		lightbox.classList.add("active");
	});
});

console.log("main.js executed without issues"); // Debugging confirmation
