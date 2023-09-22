//Form
function enviar() {
  var data = new Date();
  var hora = data.getHours();
  var titulo = "";
  var mensagem = "";

  if (hora < 12 && hora > 6) {
    titulo = "Good morning";
    mensagem = "We're almost there, solve the captcha and your email will be sent!";
  } if (hora <= 18 && hora >= 13) {
    titulo = "Good Evening";
    mensagem = "We're almost there, solve the captcha and your email will be sent!";
  } else {
    titulo = "Good night";
    mensagem = "We're almost there, solve the captcha and your email will be sent!";
  }

  Swal.fire({
    title: titulo,
    text: mensagem,
    
    confirmButtonText: "OK"
  }).then(function(result) {
    if (result.isConfirmed) {
      // Continuar com o envio do formulário
      document.querySelector(".box-form").submit();
    }
  });
}

document.getElementById("contatoForm").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que o formulário seja enviado imediatamente
  enviar(); // Chamar a função enviar()
});




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
