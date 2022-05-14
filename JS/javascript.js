
var menu = document.getElementById("menu-list");
    menu.style.display = "none";

function menuButton(){

    if (menu.style.display === "none") {
        menu.classList.remove("unactive");
        menu.style.display = "flex";
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
        menu.classList.add("unactive");
        setTimeout(function(){
            menu.style.display = "none";
        }, 999);
        
      }
}
