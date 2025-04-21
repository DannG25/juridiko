  // Texto animado de escritura
  document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ["experiencia comprobada", "estrategias efectivas", "resultados tangibles", "compromiso absoluto"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
      const currentText = textArray[textArrayIndex];
      
      if (isDeleting) {
        typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
      } else {
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeText, typingSpeed);
      }
    }
    
    // Inicia animación después de 1 segundo
    setTimeout(typeText, 2000);
    
    // Scroll suave al hacer clic en la flecha
    document.querySelector('.hero-scroll-down').addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
      });
    });
  });
 
 // Carrucel de testimonios 
   document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonios-carousel');
    const cards = document.querySelectorAll('.testimonio-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    let autoScrollInterval;
    const intervalDuration = 3000; // 5 segundos
    
    // Crear dots de navegación
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if(i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoScroll();
      });
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
      // Ocultar todas las tarjetas
      cards.forEach(card => {
        card.classList.remove('active');
      });
      
      // Mostrar solo la tarjeta actual
      cards[currentIndex].classList.add('active');
      
      // Actualizar dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }
    
    function prevSlide() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    }
    
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }
    
    function startAutoScroll() {
      autoScrollInterval = setInterval(nextSlide, intervalDuration);
    }
    
    function resetAutoScroll() {
      clearInterval(autoScrollInterval);
      startAutoScroll();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoScroll();
    });
    
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoScroll();
    });
    
    // Pausar al interactuar
    // carousel.addEventListener('mouseenter', () => {
    //   clearInterval(autoScrollInterval);
    // });
    
    // carousel.addEventListener('mouseleave', () => {
    //   startAutoScroll();
    // });
    
    // Iniciar
    updateCarousel();
    startAutoScroll();
  });