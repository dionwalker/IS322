document.getElementById("gallery__filters__message").style.display = "none";

function filterSelection(c) {
    var thumbnails = document.getElementsByClassName("gallery__column");
    if (c == "all") c = "";

    for (var i = 0; i < thumbnails.length; i++) {
        removeFilter(thumbnails[i], "filter--show");
        if (thumbnails[i].className.indexOf(c) > -1) addFilter(thumbnails[i], "filter--show");
    }
}


function addFilter(element, name) {


    var arr1 = element.className.split(" ");

    var arr2 = name.split(" ");

    for (var i = 0; i < arr2.length; i++) {

        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}


function removeFilter(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {

        while (arr1.indexOf(arr2[i]) > -1) {

            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

filterSelection("all");

var gallery__filterContainer = document.getElementById("gallery__filters");
var gallery__filters = gallery__filterContainer.getElementsByClassName("gallery__filter");

for (var i = 0; i < gallery__filters.length; i++) {
    gallery__filters[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("tag--active");
        current[0].className = current[0].className.replace(" tag--active", "");
        this.className += " tag--active";
    });
}

document.getElementById('filter--show-all').addEventListener("click", function() {
    filterSelection("all");
}, false);
document.getElementById('filter--twodollars').addEventListener("click", function() {
    filterSelection("tag--twodollars");
}, false);
document.getElementById('filter--threedollars').addEventListener("click", function() {
    filterSelection("tag--threedollars");
}, false);
document.getElementById('filter--everyday').addEventListener("click", function() {
    filterSelection("tag--everyday");
}, false);
document.getElementById('filter--weekendsonly').addEventListener("click", function() {
    filterSelection("tag--weekendsonly");
}, false);
document.getElementById('filter--packaging').addEventListener("click", function() {
    filterSelection("tag--packaging");
}, false);