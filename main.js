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
});