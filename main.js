// const { defineConfig } = require("vite");

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });














function buttonClick() {
    var byNow = document.querySelector("#learn").addEventListener("click", function () {
        window.location.href = "./course.html";
    });

    var startLearning = document.querySelector(".button").addEventListener("click", function () {
        window.location.href = "./course.html";
    });
}



function responsiveMo() {

    var click = document.querySelector("#click").addEventListener("click", function () {
        window.open("https://sheryians.com/courses/courses-details/Front-End%20Domination:%20Create%20Anything%20with%20Code");
    });

    var touch = document.querySelector("#touch").addEventListener("click", function () {
        window.location.href = "./course.html";
    });
    var homeScr = document.querySelector("#homeScr").addEventListener("click",function(){
        window.location.href = "./index.html";
    });
}



function navClick() {

    var press = document.querySelector("#press").addEventListener("click", function () {
        window.open("https://sheryians.com/courses/courses-details/Front-End%20Domination:%20Create%20Anything%20with%20Code");
    });

    var puss = document.querySelector("#puss").addEventListener("click", function () {
        window.location.href = "./course.html";
    })
    var goBack = document.querySelector("#goBack").addEventListener("click", function () {
        window.location.href = "./index.html";
    });



    var menu = document.querySelector(".ri-menu-3-line");
    var full = document.querySelector(".fullscr");
    menu.addEventListener("click", function () {
        full.style.top = 0


    });

    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            logo.style.opacity = 1
            menu.style.opacity = 1
        } else {
            logo.style.opacity = 1;
            menu.style.opacity = 1;
        }
    });


    var close = document.querySelector("#close")
    var full = document.querySelector(".fullscr")
    close.addEventListener("click",function(){

    full.style.top = "-100%"
    
    })





    var flag = true;
    menu.addEventListener("click", function () {
        if (flag) {
            full.style.top = 0;
            full.style.opacity = 1
            flag = true
        } else {
            full.style.top = "-100%";
            full.style.opacity = 1
            flag = false
        }
    });

}
navClick();
responsiveMo();
buttonClick();