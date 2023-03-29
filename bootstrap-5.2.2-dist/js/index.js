var arbic = document.querySelectorAll(".arbic");
arbic.forEach(element => {
    element.style.display = "none";
});

var english = document.getElementById("english");

english.onclick = function () {
    var arbic = document.querySelectorAll(".arbic");
    arbic.forEach(element => {
        element.style.display = "none";
    });

    var english = document.querySelectorAll(".english");
    english.forEach(element => {
        element.style.display = "block";
    });
}

var arbic = document.getElementById("arbic");
arbic.onclick = function () {
    var arbic = document.querySelectorAll(".arbic");
    arbic.forEach(element => {
        element.style.display = "block";
    });

    var english = document.querySelectorAll(".english");
    english.forEach(element => {
        element.style.display = "none";
    });
}