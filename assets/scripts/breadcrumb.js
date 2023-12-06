//Get current page
var path = "";
var page = "";

path = window.location.pathname;
page = path.split("/").pop();
page = page.replace(".html","");
page = page.replace("_", " ");

//set breadcrumb to current page if not empty (assumes homepage)
if (page != ""){
	var element = document.getElementById("currentPage");
	element.innerText = " / " + page;
}