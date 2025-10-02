// Main interactive functionality for the Om symbol
document.addEventListener('DOMContentLoaded', function() {
    // Get all clickable sections
    const soulSection = document.querySelector('.soul-section');
    const mindSection = document.querySelector('.mind-section');
    const bodySection = document.querySelector('.body-section');
    const tooltip = document.getElementById('tooltip');

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

    // Soul section events
    if (soulSection) {
        soulSection.addEventListener('click', () => navigateToPage('soul.html'));
        soulSection.addEventListener('mouseenter', (e) => showTooltip(e, 'Soul - The eternal essence'));
        soulSection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        soulSection.addEventListener('mouseleave', hideTooltip);
    }

    // Mind section events
    if (mindSection) {
        mindSection.addEventListener('click', () => navigateToPage('mind.html'));
        mindSection.addEventListener('mouseenter', (e) => showTooltip(e, 'Mind - The conscious awareness'));
        mindSection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        mindSection.addEventListener('mouseleave', hideTooltip);
    }

    // Body section events
    if (bodySection) {
        bodySection.addEventListener('click', () => navigateToPage('body.html'));
        bodySection.addEventListener('mouseenter', (e) => showTooltip(e, 'Body - The physical vessel'));
        bodySection.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        });
        bodySection.addEventListener('mouseleave', hideTooltip);
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
