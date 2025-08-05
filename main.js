document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar'); // Seleciona o elemento com a classe .navbar
    const scrollThreshold = 20; // Rolagem de 20px para acionar a fixação e sombra

    // Verifica se a navbar existe antes de adicionar o listener
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('fixed-top'); // Usa a classe do Bootstrap
                // Adiciona padding ao body para evitar que o conteúdo fique escondido
                document.body.style.paddingTop = navbar.offsetHeight + 'px';
            } else {
                navbar.classList.remove('fixed-top');
                document.body.style.paddingTop = '0'; // Remove o padding quando não está fixo
            }
        });
    } else {
        console.warn("Elemento com a classe 'navbar' não encontrado. A funcionalidade de fixar na rolagem não funcionará.");
    }

    // 3D Transform Effect for Messaging Cards (Desktop only)
    const messagingCards = document.querySelectorAll('.messaging-card');
    
    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Only apply 3D transform effect on non-touch devices
    if (!isTouchDevice) {
        messagingCards.forEach(function(messagingCard) {
            messagingCard.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Calculate mouse position relative to card center
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                // Calculate rotation angles (max 15 degrees)
                const rotateY = (mouseX / (rect.width / 2)) * 15;
                const rotateX = -(mouseY / (rect.height / 2)) * 15;
                
                // Apply transforms using CSS custom properties
                this.style.setProperty('--rotateX', `${rotateX}deg`);
                this.style.setProperty('--rotateY', `${rotateY}deg`);
                this.style.setProperty('--scale', '1.05');
            });
            
            messagingCard.addEventListener('mouseleave', function() {
                // Reset transforms when mouse leaves
                this.style.setProperty('--rotateX', '0deg');
                this.style.setProperty('--rotateY', '0deg');
                this.style.setProperty('--scale', '1');
            });
        });
    }
});