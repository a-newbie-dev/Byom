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
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY - 30 + 'px';
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
});
