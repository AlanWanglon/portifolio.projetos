function enviar() {
  var data = new Date();
  var hora = data.getHours();
  if (hora < 12 && hora > 6) {
    alert("Obrigada pelo seu contato. Excelente dia!!");
  } else {
    alert("Obrigada pelo seu contato. Excelente tarde!!");
  }
}

//FUNÇÃO SCROLL

const target = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (elemento) {
    if (windowTop > elemento.offsetTop) {
      elemento.classList.add(animationClass);
    } else {
      elemento.classList.remove(animationClass);
    }
  });
}
window.addEventListener("scroll", function () {
  animeScroll();
});

function openMenu() {
  if ((document.querySelector(".fa-xmark").style.display = "block")) {
    document.querySelector("nav").style.display = "flex";
    document.querySelector("nav").style.transition =
      "background-color 0.3s ease-in-out";
    document.querySelector(".fa-xmark").style.display = "block";
    document.querySelector(".fa-xmark").style.transition =
      "background-color 0.3s ease-in-out";
    document.querySelector(".fa-bars").style.display = "none";
  }
}
function closeMenu() {
  if ((document.querySelector(".fa-bars").style.display = "block")) {
    document.querySelector("nav").style.display = "none";
    document.querySelector(".fa-xmark").style.transition =
      "background-color 0.3s ease-in-out";
  }
  document.querySelector(".fa-xmark").style.display = "none";
  document.querySelector(".fa-bars").style.display = "block";
  document.querySelector(".fa-xmark").style.transition =
    "background-color 0.3s ease-in-out";
}
