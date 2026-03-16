
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var nav = document.querySelector('nav');

// Auto Slider
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var current = 0;

function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
}

// Auto play كل 4 ثواني
setInterval(function () {
    var next = (current + 1) % slides.length;
    goToSlide(next);
}, 4000);

// كليك على الدوتس
dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
        goToSlide(i);
    });
});
document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('scrolled-bg');
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.7)"

    }
    else {
        nav.classList.remove('scrolled-bg');
        nav.style.backgroundColor = "#F8F6F6"
    }
})

loginBtn.onclick = function () {




    var userValue = username.value;
    var passValue = password.value;





    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/khaledeng/RecipeMarket/refs/heads/main/data/Users.json");

    xhr.responseType = "json";

    xhr.send();



    xhr.onload = function () {


        var users = xhr.response.users;



        var found = false;




        for (var u of users) {



            if (u.username == userValue && u.password == passValue) {

                found = true;



                localStorage.setItem("role", u.role);




                if (u.role == "admin") {

                    window.location.href = "../Recipes-page/recipes.html";//الداشبورد

                }




                else {

                    window.location.href = "../Home-page/Index.html";

                }


                break;

            }


        }





        if (found == false) {

            alert("اسم المستخدم او كلمة المرور غير صحيحة");

        }


    }

}