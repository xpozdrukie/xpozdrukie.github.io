let url='http://books.cloudfoundry.com/data/books';
let promise =fetch(url);
if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let prod_json = response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
} 