document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
  
    // Obtén los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Verifica que los campos no estén vacíos
    if (name && email && message) {
      // Crea el enlace para WhatsApp
      const phone = '+59892431954'; // Número de WhatsApp
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`)}`;
  
      // Redirecciona a WhatsApp
      window.open(url, '_blank');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  