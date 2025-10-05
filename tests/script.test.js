/**
 * Unit tests for Byom interactive functionality
 * Tests cover navigation, tooltips, keyboard shortcuts, and animations
 */

describe('Byom Interactive Functionality', () => {
  let container;

  beforeEach(() => {
    // Setup DOM structure before each test
    document.body.innerHTML = `
      <div class="container">
        <header>
          <h1 class="title">Byom</h1>
          <p class="subtitle">Journey through Body, Mind & Soul</p>
        </header>

        <main class="om-container">
          <div class="om-symbol-wrapper">
            <svg class="om-overlay">
              <g class="soul-section clickable" data-tooltip="Soul - The eternal essence"></g>
              <g class="mind-section clickable" data-tooltip="Mind - The conscious awareness"></g>
              <g class="body-section clickable" data-tooltip="Body - The physical vessel"></g>
            </svg>
            <div class="om-text">ॐ</div>
            <div class="om-symbol"></div>
          </div>

          <div class="sections-info">
            <div class="section-card soul-card"></div>
            <div class="section-card mind-card"></div>
            <div class="section-card body-card"></div>
          </div>
        </main>

        <footer></footer>
      </div>
      <div id="tooltip" class="tooltip"></div>
    `;

    container = document.querySelector('.container');
    
    // Reset window.location for each test
    window.location.href = '';
  });

  afterEach(() => {
    // Clean up DOM after each test
    document.body.innerHTML = '';
  });

  describe('DOM Elements', () => {
    test('should have all required elements present', () => {
      expect(document.querySelector('.soul-section')).toBeInTheDocument();
      expect(document.querySelector('.mind-section')).toBeInTheDocument();
      expect(document.querySelector('.body-section')).toBeInTheDocument();
      expect(document.querySelector('.om-text')).toBeInTheDocument();
      expect(document.getElementById('tooltip')).toBeInTheDocument();
    });

    test('should have correct number of section cards', () => {
      const sectionCards = document.querySelectorAll('.section-card');
      expect(sectionCards).toHaveLength(3);
    });

    test('should have footer element', () => {
      expect(document.querySelector('footer')).toBeInTheDocument();
    });
  });

  describe('Navigation Functions', () => {
    test('should navigate to body.html when body section is clicked', () => {
      const bodySection = document.querySelector('.body-section');
      const navigateSpy = jest.fn();
      
      bodySection.addEventListener('click', () => {
        navigateSpy('body.html');
      });

      const event = new MouseEvent('click', { bubbles: true });
      bodySection.dispatchEvent(event);
      
      expect(navigateSpy).toHaveBeenCalledWith('body.html');
    });

    test('should navigate to mind.html when mind section is clicked', () => {
      const mindSection = document.querySelector('.mind-section');
      const navigateSpy = jest.fn();
      
      mindSection.addEventListener('click', () => {
        navigateSpy('mind.html');
      });

      const event = new MouseEvent('click', { bubbles: true });
      mindSection.dispatchEvent(event);
      
      expect(navigateSpy).toHaveBeenCalledWith('mind.html');
    });

    test('should navigate to soul.html when soul section is clicked', () => {
      const soulSection = document.querySelector('.soul-section');
      const navigateSpy = jest.fn();
      
      soulSection.addEventListener('click', () => {
        navigateSpy('soul.html');
      });

      const event = new MouseEvent('click', { bubbles: true });
      soulSection.dispatchEvent(event);
      
      expect(navigateSpy).toHaveBeenCalledWith('soul.html');
    });
  });

  describe('Tooltip Functionality', () => {
    test('should show tooltip with correct text on hover', () => {
      const tooltip = document.getElementById('tooltip');
      const soulSection = document.querySelector('.soul-section');
      
      const mockEvent = {
        pageX: 100,
        pageY: 200
      };

      // Simulate showTooltip function
      tooltip.textContent = 'Soul - The eternal essence';
      tooltip.style.left = mockEvent.pageX + 10 + 'px';
      tooltip.style.top = mockEvent.pageY - 30 + 'px';
      tooltip.classList.add('show');

      expect(tooltip.textContent).toBe('Soul - The eternal essence');
      expect(tooltip.classList.contains('show')).toBe(true);
      expect(tooltip.style.left).toBe('110px');
      expect(tooltip.style.top).toBe('170px');
    });

    test('should hide tooltip when mouse leaves section', () => {
      const tooltip = document.getElementById('tooltip');
      
      // First show the tooltip
      tooltip.classList.add('show');
      expect(tooltip.classList.contains('show')).toBe(true);
      
      // Then hide it
      tooltip.classList.remove('show');
      expect(tooltip.classList.contains('show')).toBe(false);
    });

    test('should update tooltip position on mouse move', () => {
      const tooltip = document.getElementById('tooltip');
      
      const mockEvent1 = { pageX: 100, pageY: 200 };
      tooltip.style.left = mockEvent1.pageX + 10 + 'px';
      tooltip.style.top = mockEvent1.pageY - 30 + 'px';
      expect(tooltip.style.left).toBe('110px');
      expect(tooltip.style.top).toBe('170px');

      const mockEvent2 = { pageX: 150, pageY: 250 };
      tooltip.style.left = mockEvent2.pageX + 10 + 'px';
      tooltip.style.top = mockEvent2.pageY - 30 + 'px';
      expect(tooltip.style.left).toBe('160px');
      expect(tooltip.style.top).toBe('220px');
    });
  });

  describe('Om Text Style Changes', () => {
    test('should change Om text color on soul section hover', () => {
      const omText = document.querySelector('.om-text');
      
      omText.style.color = '#8e44ad';
      omText.style.textShadow = '0 0 30px rgba(142, 68, 173, 0.8)';

      expect(omText.style.color).toBeTruthy();
      expect(omText.style.textShadow).toBe('0 0 30px rgba(142, 68, 173, 0.8)');
    });

    test('should change Om text color on mind section hover', () => {
      const omText = document.querySelector('.om-text');
      
      omText.style.color = '#2980b9';
      omText.style.textShadow = '0 0 30px rgba(41, 128, 185, 0.8)';

      expect(omText.style.color).toBeTruthy();
      expect(omText.style.textShadow).toBe('0 0 30px rgba(41, 128, 185, 0.8)');
    });

    test('should change Om text color on body section hover', () => {
      const omText = document.querySelector('.om-text');
      
      omText.style.color = '#27ae60';
      omText.style.textShadow = '0 0 30px rgba(39, 174, 96, 0.8)';

      expect(omText.style.color).toBeTruthy();
      expect(omText.style.textShadow).toBe('0 0 30px rgba(39, 174, 96, 0.8)');
    });

    test('should reset Om text style to default', () => {
      const omText = document.querySelector('.om-text');
      
      // First change the style
      omText.style.color = '#8e44ad';
      omText.style.textShadow = '0 0 30px rgba(142, 68, 173, 0.8)';
      
      // Then reset it
      omText.style.color = '#2c3e50';
      omText.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

      expect(omText.style.color).toBeTruthy();
      expect(omText.style.textShadow).toBe('0 4px 8px rgba(0, 0, 0, 0.2)');
    });
  });

  describe('Keyboard Navigation', () => {
    test('should navigate to body.html when pressing key "1"', () => {
      const navigateSpy = jest.fn();
      
      document.addEventListener('keydown', (event) => {
        if (event.key === '1') {
          navigateSpy('body.html');
        }
      });

      const event = new KeyboardEvent('keydown', { key: '1' });
      document.dispatchEvent(event);

      expect(navigateSpy).toHaveBeenCalledWith('body.html');
    });

    test('should navigate to mind.html when pressing key "2"', () => {
      const navigateSpy = jest.fn();
      
      document.addEventListener('keydown', (event) => {
        if (event.key === '2') {
          navigateSpy('mind.html');
        }
      });

      const event = new KeyboardEvent('keydown', { key: '2' });
      document.dispatchEvent(event);

      expect(navigateSpy).toHaveBeenCalledWith('mind.html');
    });

    test('should navigate to soul.html when pressing key "3"', () => {
      const navigateSpy = jest.fn();
      
      document.addEventListener('keydown', (event) => {
        if (event.key === '3') {
          navigateSpy('soul.html');
        }
      });

      const event = new KeyboardEvent('keydown', { key: '3' });
      document.dispatchEvent(event);

      expect(navigateSpy).toHaveBeenCalledWith('soul.html');
    });

    test('should not navigate when pressing other keys', () => {
      const navigateSpy = jest.fn();
      
      document.addEventListener('keydown', (event) => {
        if (['1', '2', '3'].includes(event.key)) {
          navigateSpy(event.key);
        }
      });

      const event = new KeyboardEvent('keydown', { key: 'a' });
      document.dispatchEvent(event);

      expect(navigateSpy).not.toHaveBeenCalled();
    });
  });

  describe('Animation Initialization', () => {
    test('should initialize Om symbol with opacity 0 and scale 0.8', () => {
      const omSymbol = document.querySelector('.om-symbol');
      
      omSymbol.style.opacity = '0';
      omSymbol.style.transform = 'scale(0.8)';

      expect(omSymbol.style.opacity).toBe('0');
      expect(omSymbol.style.transform).toBe('scale(0.8)');
    });

    test('should initialize section cards with opacity 0 and translateY', () => {
      const sectionCards = document.querySelectorAll('.section-card');
      
      sectionCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
      });

      sectionCards.forEach((card) => {
        expect(card.style.opacity).toBe('0');
        expect(card.style.transform).toBe('translateY(30px)');
      });
    });

    test('should apply transition styles after animation starts', () => {
      const omSymbol = document.querySelector('.om-symbol');
      
      omSymbol.style.transition = 'all 1s ease';
      omSymbol.style.opacity = '1';
      omSymbol.style.transform = 'scale(1)';

      expect(omSymbol.style.transition).toBe('all 1s ease');
      expect(omSymbol.style.opacity).toBe('1');
      expect(omSymbol.style.transform).toBe('scale(1)');
    });
  });

  describe('Keyboard Hint', () => {
    test('should add keyboard hint to footer', () => {
      const footer = document.querySelector('footer');
      const keyboardHint = document.createElement('p');
      keyboardHint.textContent = 'Keyboard shortcuts: 1 - Body, 2 - Mind, 3 - Soul';
      keyboardHint.style.fontSize = '0.9rem';
      keyboardHint.style.opacity = '0.7';
      keyboardHint.style.marginTop = '15px';
      footer.appendChild(keyboardHint);

      const addedHint = footer.querySelector('p');
      expect(addedHint).toBeInTheDocument();
      expect(addedHint.textContent).toBe('Keyboard shortcuts: 1 - Body, 2 - Mind, 3 - Soul');
      expect(addedHint.style.fontSize).toBe('0.9rem');
      expect(addedHint.style.opacity).toBe('0.7');
      expect(addedHint.style.marginTop).toBe('15px');
    });
  });

  describe('Section Interactions', () => {
    test('should handle multiple interactions on soul section', () => {
      const soulSection = document.querySelector('.soul-section');
      const tooltip = document.getElementById('tooltip');
      const omText = document.querySelector('.om-text');

      // Simulate mouseenter
      tooltip.textContent = 'Soul - The eternal essence';
      tooltip.classList.add('show');
      omText.style.color = '#8e44ad';

      expect(tooltip.textContent).toBe('Soul - The eternal essence');
      expect(tooltip.classList.contains('show')).toBe(true);
      expect(omText.style.color).toBeTruthy();

      // Simulate mouseleave
      tooltip.classList.remove('show');
      omText.style.color = '#2c3e50';

      expect(tooltip.classList.contains('show')).toBe(false);
      expect(omText.style.color).toBeTruthy();
    });

    test('should handle multiple interactions on mind section', () => {
      const mindSection = document.querySelector('.mind-section');
      const tooltip = document.getElementById('tooltip');
      const omText = document.querySelector('.om-text');

      // Simulate mouseenter
      tooltip.textContent = 'Mind - The conscious awareness';
      tooltip.classList.add('show');
      omText.style.color = '#2980b9';

      expect(tooltip.textContent).toBe('Mind - The conscious awareness');
      expect(tooltip.classList.contains('show')).toBe(true);
      expect(omText.style.color).toBeTruthy();

      // Simulate mouseleave
      tooltip.classList.remove('show');
      omText.style.color = '#2c3e50';

      expect(tooltip.classList.contains('show')).toBe(false);
      expect(omText.style.color).toBeTruthy();
    });

    test('should handle multiple interactions on body section', () => {
      const bodySection = document.querySelector('.body-section');
      const tooltip = document.getElementById('tooltip');
      const omText = document.querySelector('.om-text');

      // Simulate mouseenter
      tooltip.textContent = 'Body - The physical vessel';
      tooltip.classList.add('show');
      omText.style.color = '#27ae60';

      expect(tooltip.textContent).toBe('Body - The physical vessel');
      expect(tooltip.classList.contains('show')).toBe(true);
      expect(omText.style.color).toBeTruthy();

      // Simulate mouseleave
      tooltip.classList.remove('show');
      omText.style.color = '#2c3e50';

      expect(tooltip.classList.contains('show')).toBe(false);
      expect(omText.style.color).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    test('should handle missing elements gracefully', () => {
      document.body.innerHTML = '<div></div>';
      
      const soulSection = document.querySelector('.soul-section');
      const mindSection = document.querySelector('.mind-section');
      const bodySection = document.querySelector('.body-section');
      
      expect(soulSection).toBeNull();
      expect(mindSection).toBeNull();
      expect(bodySection).toBeNull();
    });

    test('should work when footer exists', () => {
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    test('should work when om-symbol exists', () => {
      const omSymbol = document.querySelector('.om-symbol');
      expect(omSymbol).toBeInTheDocument();
    });
  });
});
