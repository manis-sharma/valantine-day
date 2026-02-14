  function goToPage(pageNumber) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const targetPage = document.getElementById('page' + pageNumber);
            targetPage.classList.add('active');
            
            // Create floating hearts on page transition
            createFloatingHearts();
        }

        function toggleEnvelope() {
            const envelope = document.getElementById('envelope');
            const hint = document.querySelector('.tap-hint');
            
            // Toggle between open and closed
            envelope.classList.toggle('open');
            
            // Create hearts on every interaction
            createFloatingHearts();
            
            // Update hint text based on state
            if (envelope.classList.contains('open')) {
                // Just opened
                setTimeout(() => {
                    if (hint) {
                        hint.style.opacity = '0';
                        setTimeout(() => {
                            hint.textContent = '💕 Tap again to close 💕';
                            hint.style.opacity = '1';
                        }, 300);
                    }
                }, 800);
            } else {
                // Just closed
                setTimeout(() => {
                    if (hint) {
                        hint.style.opacity = '0';
                        setTimeout(() => {
                            hint.textContent = '✨ Tap the envelope to read your letter ✨';
                            hint.style.opacity = '1';
                        }, 300);
                    }
                }, 300);
            }
        }

        function createFloatingHearts() {
            const container = document.getElementById('heartsContainer');
            const hearts = ['💚', '💕', '💖', '💗', '💝', '❤️'];
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    container.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 7000);
                }, i * 200);
            }
        }

        // Add some hearts on page load
        window.onload = function() {
            createFloatingHearts();
        };
