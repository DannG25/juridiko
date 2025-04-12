const testimonios = document.querySelectorAll(".testimonio");
let indice = 0;

function actualizarCarrusel() {
  testimonios.forEach((testimonio, i) => {
    testimonio.classList.remove("activo", "prev", "next");

    if (i === indice) {
      testimonio.classList.add("activo");
    } else if (
      i ===
      (indice - 1 + testimonios.length) % testimonios.length
    ) {
      testimonio.classList.add("prev");
    } else if (i === (indice + 1) % testimonios.length) {
      testimonio.classList.add("next");
    }
  });
}

actualizarCarrusel();

setInterval(() => {
  indice = (indice + 1) % testimonios.length;
  actualizarCarrusel();
}, 5000);