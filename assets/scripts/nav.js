
function setActiveElement () {
	try {
		//Get current page
		var page = window.location.pathname.split("/").pop();

		// If root, add active to first element in list
		if (!page) {
			document.querySelector('.nav-main li:first-child a').classList.add('active')
		} else {
			var linkActive = document.querySelector('.nav-main a[href=\'' + page + '\']')
			linkActive.classList.add('active')
		}

	} catch (e) {
		// something went bad, die quietly
	}
}

setActiveElement()
