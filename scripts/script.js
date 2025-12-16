document.addEventListener('DOMContentLoaded', function () {

    /* ===============================
       MENU RESPONSIVO
    =============================== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    /* ===============================
       BOTÕES SWOT (apenas um aberto)
    =============================== */
    const botoesSwot = document.querySelectorAll('.btn-swot');

    botoesSwot.forEach(botao => {
        botao.addEventListener('click', function () {

            const swotAtual = this.nextElementSibling;

            if (!swotAtual) return;

            const estaAberto = swotAtual.classList.contains('ativo');

            // Fecha todas as SWOTs
            document.querySelectorAll('.swot-container').forEach(swot => {
                swot.classList.remove('ativo');
            });

            // Reseta todos os textos dos botões
            document.querySelectorAll('.btn-swot').forEach(btn => {
                btn.textContent = 'Ver Análise SWOT';
            });

            // Se não estava aberto, abre o clicado
            if (!estaAberto) {
                swotAtual.classList.add('ativo');
                this.textContent = 'Ocultar SWOT';
            }
        });
    });

    /* ===============================
       ANIMAÇÕES AO SCROLL
    =============================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document
        .querySelectorAll('.service-card, .team-member, .diferencial-item')
        .forEach(el => observer.observe(el));

    /* ===============================
       FORMULÁRIO DE CONTATO
    =============================== */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Formulário enviado:', { name, email, message });

            alert(`Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);

            contactForm.reset();
        });
    }

    /* ===============================
       SCROLL SUAVE
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
