//create breadcrumb
var breadcrumb = document.createElement('a'); 

//Create home link to breadcrumb
var text = document.createTextNode("Home");
breadcrumb.appendChild(text); 
breadcrumb.href = "https://fenris42.github.io/"; 

//append current page to breadcrumb
var path = "";
var page = "";

path = window.location.pathname;
page = path.split("/").pop();
page = page.replace(".html","");
page = " / " + page
text = document.createTextNode(page);
breadcrumb.appendChild(text); 

//display breadcrumb
document.header.appendChild(breadcrumb); 