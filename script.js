// Main interactive functionality for the Om symbol
document.addEventListener('DOMContentLoaded', function() {
    // Get all clickable sections
    const soulSection = document.querySelector('.soul-section');
    const mindSection = document.querySelector('.mind-section');
    const bodySection = document.querySelector('.body-section');
    const tooltip = document.getElementById('tooltip');
    const omText = document.querySelector('.om-text');

    // Navigation function
    function navigateToPage(page) {
        window.location.href = page;
    }

    // Tooltip functionality
function showTooltip(event, text) {
  tooltip.textContent = text;
  // use client coords since tooltip is position: fixed
  const x = event.clientX + 10;
  const y = event.clientY - 30;
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
  tooltip.classList.add('show');
}


    function hideTooltip() {
        tooltip.classList.remove('show');
    }

    // Reset Om text style
    function resetOmStyle() {
        omText.style.color = '#2c3e50';
        omText.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    }

    // Soul section events
    if (soulSection) {
        soulSection.addEventListener('click', () => navigateToPage('soul.html'));
        soulSection.addEventListener('mouseenter', (e) => {
            showTooltip(e, 'Soul - The eternal essence');
            omText.style.color = '#8e44ad';
            omText.style.textShadow = '0 0 30px rgba(142, 68, 173, 0.8)';
        });
        soulSection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        soulSection.addEventListener('mouseleave', () => {
            hideTooltip();
            resetOmStyle();
        });
    }

    // Mind section events
    if (mindSection) {
        mindSection.addEventListener('click', () => navigateToPage('mind.html'));
        mindSection.addEventListener('mouseenter', (e) => {
            showTooltip(e, 'Mind - The conscious awareness');
            omText.style.color = '#2980b9';
            omText.style.textShadow = '0 0 30px rgba(41, 128, 185, 0.8)';
        });
        mindSection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        mindSection.addEventListener('mouseleave', () => {
            hideTooltip();
            resetOmStyle();
        });
    }

    // Body section events
    if (bodySection) {
        bodySection.addEventListener('click', () => navigateToPage('body.html'));
        bodySection.addEventListener('mouseenter', (e) => {
            showTooltip(e, 'Body - The physical vessel');
            omText.style.color = '#27ae60';
            omText.style.textShadow = '0 0 30px rgba(39, 174, 96, 0.8)';
        });
        bodySection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        bodySection.addEventListener('mouseleave', () => {
            hideTooltip();
            resetOmStyle();
        });
    }

    // Add smooth loading animation
    const omSymbol = document.querySelector('.om-symbol');
    if (omSymbol) {
        omSymbol.style.opacity = '0';
        omSymbol.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            omSymbol.style.transition = 'all 1s ease';
            omSymbol.style.opacity = '1';
            omSymbol.style.transform = 'scale(1)';
        }, 300);
    }

    // Add floating animation to section cards
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 600 + (index * 200));
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case '1':
                navigateToPage('body.html');
                break;
            case '2':
                navigateToPage('mind.html');
                break;
            case '3':
                navigateToPage('soul.html');
                break;
        }
    });

    // Add keyboard hint
    const footer = document.querySelector('footer');
    if (footer) {
        const keyboardHint = document.createElement('p');
        keyboardHint.textContent = 'Keyboard shortcuts: 1 - Body, 2 - Mind, 3 - Soul';
        keyboardHint.style.fontSize = '0.9rem';
        keyboardHint.style.opacity = '0.7';
        keyboardHint.style.marginTop = '15px';
        footer.appendChild(keyboardHint);
    }

    // Meditation Timer functionality
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const startBtn = document.getElementById('timer-start');
    const resetBtn = document.getElementById('timer-reset');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const progressFill = document.getElementById('progress-fill');

    if (timerMinutes && timerSeconds && startBtn && resetBtn) {
        let totalSeconds = 300; // Default 5 minutes
        let remainingSeconds = totalSeconds;
        let timerInterval = null;
        let isRunning = false;

        // Format time display
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return {
                minutes: mins.toString().padStart(2, '0'),
                seconds: secs.toString().padStart(2, '0')
            };
        }

        // Update display
        function updateDisplay() {
            const time = formatTime(remainingSeconds);
            timerMinutes.textContent = time.minutes;
            timerSeconds.textContent = time.seconds;
            
            // Update progress bar
            const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
            progressFill.style.width = progress + '%';
        }

        // Start/Pause timer
        function toggleTimer() {
            if (isRunning) {
                // Pause
                clearInterval(timerInterval);
                startBtn.textContent = 'Resume';
                isRunning = false;
            } else {
                // Start or Resume
                startBtn.textContent = 'Pause';
                isRunning = true;
                
                timerInterval = setInterval(() => {
                    if (remainingSeconds > 0) {
                        remainingSeconds--;
                        updateDisplay();
                    } else {
                        // Timer completed
                        clearInterval(timerInterval);
                        startBtn.textContent = 'Start';
                        isRunning = false;
                        
                        // Visual indication of completion
                        timerMinutes.style.color = '#27ae60';
                        timerSeconds.style.color = '#27ae60';
                        setTimeout(() => {
                            timerMinutes.style.color = '#2c3e50';
                            timerSeconds.style.color = '#2c3e50';
                        }, 2000);
                        
                        // Optional: Play notification sound or show alert
                        if ('Notification' in window && Notification.permission === 'granted') {
                            new Notification('Meditation Complete', {
                                body: 'Your meditation session has ended. 🧘',
                                icon: '🧠'
                            });
                        }
                    }
                }, 1000);
            }
        }

        // Reset timer
        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            remainingSeconds = totalSeconds;
            startBtn.textContent = 'Start';
            updateDisplay();
        }

        // Set preset duration
        function setPreset(duration) {
            clearInterval(timerInterval);
            isRunning = false;
            totalSeconds = duration * 60;
            remainingSeconds = totalSeconds;
            startBtn.textContent = 'Start';
            updateDisplay();
            
            // Update active preset button
            presetBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Event listeners
        startBtn.addEventListener('click', toggleTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        presetBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const duration = parseInt(e.target.dataset.duration);
                setPreset(duration);
            });
        });

        // Request notification permission on first interaction
        if ('Notification' in window && Notification.permission === 'default') {
            startBtn.addEventListener('click', () => {
                Notification.requestPermission();
            }, { once: true });
        }

        // Initialize display
        updateDisplay();
    }
});

const toggleBtn = document.getElementById('theme-toggle');
const mainCSS = document.getElementById('theme-link-main');
const pageCSS = document.getElementById('theme-link-page'); // can be null

// function to apply theme
function applyTheme(theme) {
    // main CSS
    if (mainCSS) {
        mainCSS.href = theme === 'dark' ? 'darkstyles.css' : 'styles.css';
    }

    // page CSS
    if (pageCSS) {
        if (pageCSS.href) { // only if page CSS exists
            pageCSS.href = theme === 'dark' ? 'dark-ps.css' : 'page-styles.css';
        }
    }

    // button icon
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';

    // save to localStorage
    localStorage.setItem('theme', theme);
}

// toggle on click
toggleBtn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// on load, apply saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});




