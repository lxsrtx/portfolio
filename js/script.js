document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("myDiv");
    myDiv.addEventListener("click", function() {
        window.location.href = "mailto:hireme@arayabzhali.com";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("myLogo");
    myDiv.addEventListener("click", function() {
        window.location.href = "index.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("cocoon");
    myDiv.addEventListener("click", function() {
        window.location.href = "cocoon.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("vogue");
    myDiv.addEventListener("click", function() {
        window.location.href = "vogue.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("ivy");
    myDiv.addEventListener("click", function() {
        window.location.href = "ivy&rose.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("dime");
    myDiv.addEventListener("click", function() {
        window.location.href = "dime.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var myDiv = document.getElementById("steppe");
        myDiv.addEventListener("click", function() {
            window.location.href = "steppe.html";
    });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var myDiv = document.getElementById("nomadica");
        myDiv.addEventListener("click", function() {
            window.location.href = "nomadica.html";
    });
    });

    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".expand");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })