document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector(".menu");
    let hamburger = document.querySelector(".hamburger");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function() {
            menu.classList.toggle("open");
        });

        document.addEventListener("click", function(event) {
            if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
                menu.classList.remove("open");
            }
        });
    } else {
        console.error("العناصر غير موجودة في الـ HTML!");
    }
});
function median_library_ready(){
    median_match_system_navbar_to_body_background_color();
  }
  function togglePassword() {
    let passwordInput = document.getElementById("password");
    let icon = document.getElementById("toggleIcon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.src = "img/eye-on.png"; // الصورة عند إخفاء الباسوورد
    } else {
      passwordInput.type = "password";
      icon.src = "img/eye-off.png"; // الصورة عند إظهار الباسووردs
    }
  } 