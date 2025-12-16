 // Menu responsivo
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

            document.addEventListener('DOMContentLoaded', function() {
        console.log("Script SWOT carregado!"); // Isso vai aparecer no console se funcionar

        // 1. Seleciona todos os botões azuis
        const botoes = document.querySelectorAll('.btn-swot');

        // 2. Adiciona o clique em cada um
        botoes.forEach(function(botao) {
            botao.addEventListener('click', function() {
                
                // 3. Encontra a caixinha da SWOT que está logo abaixo do botão clicado
                const swotContent = this.nextElementSibling;
                
                // 4. Se a caixa não existir (erro de HTML), para aqui
                if (!swotContent) return;

                // 5. Adiciona ou remove a classe "ativo" (que tem display: block no CSS)
                swotContent.classList.toggle('ativo');

                // 6. Muda o texto do botão
                if (swotContent.classList.contains('ativo')) {
                    this.textContent = "Ocultar SWOT";
                } else {
                    this.textContent = "Ver Análise SWOT";
                }
            });
        });
    });


        // Animações ao scroll
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

        document.querySelectorAll('.service-card, .team-member, .diferencial-item').forEach(el => {
            observer.observe(el);
        });

        // Tratamento do formulário
        function handleFormSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simular envio
            console.log('Formulário enviado:', { name, email, message });
            
            // Mostrar confirmação
            alert('Obrigado, ' + name + '! Recebemos sua mensagem e entraremos em contato em breve.');
            
            // Limpar formulário
            document.getElementById('contactForm').reset();
        }

        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
