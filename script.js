// script.js

// Applica un effetto "pop" con animazione al clic su ogni pulsante
document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', (e) => {
      // Aggiunge una classe temporanea per l'effetto animato
      button.classList.add('popped');
  
      // Rimuove la classe dopo l'animazione (150ms)
      setTimeout(() => {
        button.classList.remove('popped');
      }, 150);
    });
  });  