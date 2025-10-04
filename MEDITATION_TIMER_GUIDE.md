# Meditation Timer Implementation Guide

This document provides detailed instructions for the meditation timer feature implemented on the Mind page.

## Overview

The meditation timer is a fully functional countdown timer that allows users to practice meditation with preset durations (5, 10, 15, or 20 minutes). It includes visual progress tracking and completion notifications.

## Files Modified

1. `mind.html` - HTML structure for the timer
2. `page-styles.css` - CSS styling for the timer UI
3. `script.js` - JavaScript logic for timer functionality

---

## 1. HTML Structure (mind.html)

### Location
The meditation timer section is placed after the "Wisdom on Mind" section and before the "Mental Cultivation" section.

### HTML Code Added
```html
<section class="content-card meditation-timer-card">
    <h2>🧘 Meditation Timer</h2>
    <p>Use this timer to guide your meditation practice.</p>
    
    <div class="timer-container">
        <div class="timer-display">
            <span id="timer-minutes">05</span>
            <span class="timer-separator">:</span>
            <span id="timer-seconds">00</span>
        </div>
        
        <div class="timer-presets">
            <button class="preset-btn active" data-duration="5">5 min</button>
            <button class="preset-btn" data-duration="10">10 min</button>
            <button class="preset-btn" data-duration="15">15 min</button>
            <button class="preset-btn" data-duration="20">20 min</button>
        </div>
        
        <div class="timer-controls">
            <button id="timer-start" class="timer-btn primary-btn">Start</button>
            <button id="timer-reset" class="timer-btn secondary-btn">Reset</button>
        </div>
        
        <div class="timer-progress">
            <div class="progress-bar">
                <div id="progress-fill" class="progress-fill"></div>
            </div>
        </div>
    </div>
</section>
```

### Script Tag Added
Added before closing `</body>` tag:
```html
<script src="script.js"></script>
```

---

## 2. CSS Styles (page-styles.css)

### Timer Styles Added

```css
/* Meditation Timer */
.meditation-timer-card {
    grid-column: 1 / -1;  /* Spans full width in grid */
}

.timer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 20px 0;
}

.timer-display {
    font-size: 4rem;
    font-weight: 300;
    color: #2c3e50;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.1em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer-separator {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0.3; }
}

.timer-presets {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}

.preset-btn {
    padding: 12px 24px;
    border: 2px solid #3498db;
    background: white;
    color: #3498db;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.preset-btn:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.preset-btn.active {
    background: #3498db;
    color: white;
}

.timer-controls {
    display: flex;
    gap: 20px;
}

.timer-btn {
    padding: 15px 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.primary-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.primary-btn:active {
    transform: translateY(0);
}

.secondary-btn {
    background: white;
    color: #7f8c8d;
    border: 2px solid #bdc3c7;
}

.secondary-btn:hover {
    background: #ecf0f1;
    border-color: #95a5a6;
    transform: translateY(-2px);
}

.timer-progress {
    width: 100%;
    max-width: 400px;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 10px;
}
```

### Responsive Styles (Mobile)

Added to existing mobile breakpoint at `@media (max-width: 480px)`:

```css
.timer-display {
    font-size: 3rem;
}

.timer-btn {
    padding: 12px 30px;
    font-size: 1rem;
}

.preset-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
}
```

---

## 3. JavaScript Logic (script.js)

### Timer Functionality Added

Added at the end of the DOMContentLoaded event listener:

```javascript
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
```

---

## Key Features

### 1. Timer State Management
- Tracks timer state (running/paused)
- Updates button text dynamically (Start → Pause → Resume)
- Prevents multiple intervals from running

### 2. Time Formatting
- Converts seconds to MM:SS format
- Pads single digits with leading zeros
- Updates display every second

### 3. Progress Bar
- Calculates percentage of elapsed time
- Smoothly animates width
- Resets when timer is reset or preset is changed

### 4. Preset Buttons
- Changes duration instantly
- Updates active state visually
- Stops current timer when switching presets

### 5. Completion Handling
- Shows green flash for 2 seconds
- Requests browser notification permission
- Sends notification if permission granted

### 6. User Experience
- Smooth animations and transitions
- Hover effects on all interactive elements
- Visual feedback for all actions
- Responsive design for all screen sizes

---

## Customization Options

### Changing Default Duration
In `script.js`, modify:
```javascript
let totalSeconds = 300; // Change to desired seconds (e.g., 600 for 10 min)
```

### Adding More Preset Buttons
In `mind.html`, add:
```html
<button class="preset-btn" data-duration="30">30 min</button>
```

### Changing Colors
In `page-styles.css`, modify gradient colors:
```css
.primary-btn {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Adding Sound on Completion
Add an audio element in `mind.html`:
```html
<audio id="completion-sound" src="path/to/sound.mp3"></audio>
```

Then in `script.js`, add:
```javascript
document.getElementById('completion-sound').play();
```

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- Keyboard navigable buttons
- Clear visual feedback
- High contrast text
- Readable font sizes

---

## Troubleshooting

### Timer Not Starting
- Check browser console for JavaScript errors
- Ensure script.js is properly linked in mind.html
- Verify element IDs match between HTML and JavaScript

### Progress Bar Not Showing
- Check CSS is properly loaded
- Inspect element to verify progress-fill width is updating
- Check browser DevTools for CSS conflicts

### Notification Not Working
- Browser notification permission must be granted
- Some browsers block notifications from localhost
- Test on a deployed version with HTTPS

---

## Future Enhancements

Potential additions for future versions:
- Custom duration input
- Sound selection (bells, gongs, ambient sounds)
- Session history/tracking
- Interval timers for guided meditation
- Dark mode support
- Fullscreen mode
- Breathing exercise animations

---

## Credits

Implemented as part of the Byom project - A spiritual journey through Body, Mind, and Soul.

🕉️ **Byom** - Where meditation meets mindfulness.
