//create breadcrumb
var breadcrumb = document.createElement('a'); 

//Create home link to breadcrumb
var text = document.createTextNode("Home");
breadcrumb.appendChild(text); 
breadcrumb.href = "https://fenris42.github.io/"; 

//append current page to breadcrumb
//var path = window.location.pathname;
//var page = path.split("/").pop();
//text = document.createTextNode(" / " + page);
//breadcrumb.appendChild(text); 

//display breadcrumb
document.body.appendChild(breadcrumb); 