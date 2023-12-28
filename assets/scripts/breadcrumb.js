
function setActiveElement () {
	clearNav()
	setActiveElement()
}

function clearNav() {
	try {
		// Get links, convert to array, clear active state
		var linksNav = document.querySelectorAll('.nav-main a')
		linksNav = Array.prototype.slice.call(linksNav);
		linksNav.map(clearNavLink)
	} catch (e) {
		// something went bad, can't recover
	}
}

function clearNavLink(node) {
	node.classList.remove('active')
}

function setActiveElement () {
	try {
		//Get current page
		var page = window.location.pathname.split("/").pop();

		if (!page) {
			document.querySelector('.nav-main li:first-child a').classList.add('active')
		} else {
			var linkActive = document.querySelector('.nav-main a[href=\'' + page + '\']')
			linkActive.classList.add('active')
		}

//set breadcrumb to current page if not empty (assumes homepage)
if (page != ""){
	var element = document.getElementById("currentPage");
	element.innerText = " / " + page;
}
