// Radio player functionality
document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeValue = document.querySelector('.volume-value');
    const stationBtns = document.querySelectorAll('.station-btn');
    const stationName = document.querySelector('.station-name');
    const trackInfo = document.querySelector('.track-info');

    let isPlaying = false;
    let currentStationIndex = 0;

    // Radio stations data
    const stations = [
        {
            name: 'Meditation Radio',
            track: 'Peaceful Ambient Sounds',
            category: 'mind'
        },
        {
            name: 'Body Energy',
            track: 'Energizing Rhythms',
            category: 'body'
        },
        {
            name: 'Mind Focus',
            track: 'Concentration Enhancement',
            category: 'mind'
        },
        {
            name: 'Soul Harmony',
            track: 'Spiritual Frequencies',
            category: 'soul'
        },
        {
            name: 'Holistic Balance',
            track: 'Integrated Harmonies',
            category: 'all'
        }
    ];

    // Play/Pause functionality
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            playBtn.textContent = '⏸️';
            playBtn.classList.add('playing');
            playBtn.setAttribute('aria-label', 'Pause');
            
            // Add pulsing animation to display
            document.querySelector('.player-display').style.animation = 'pulse 2s ease-in-out infinite';
        } else {
            playBtn.textContent = '▶️';
            playBtn.classList.remove('playing');
            playBtn.setAttribute('aria-label', 'Play');
            
            // Remove pulsing animation
            document.querySelector('.player-display').style.animation = 'none';
        }
    });

    // Previous station
    prevBtn.addEventListener('click', function() {
        currentStationIndex = (currentStationIndex - 1 + stations.length) % stations.length;
        updateStation();
        
        // If playing, keep playing
        if (isPlaying) {
            addStationChangeAnimation();
        }
    });

    // Next station
    nextBtn.addEventListener('click', function() {
        currentStationIndex = (currentStationIndex + 1) % stations.length;
        updateStation();
        
        // If playing, keep playing
        if (isPlaying) {
            addStationChangeAnimation();
        }
    });

    // Volume control
    volumeSlider.addEventListener('input', function() {
        const volume = this.value;
        volumeValue.textContent = volume + '%';
        
        // Update slider background gradient
        const percent = (volume / 100) * 100;
        this.style.background = `linear-gradient(to right, #667eea 0%, #764ba2 ${percent}%, #ddd ${percent}%, #ddd 100%)`;
    });

    // Initialize slider background
    const initialVolume = volumeSlider.value;
    const initialPercent = (initialVolume / 100) * 100;
    volumeSlider.style.background = `linear-gradient(to right, #667eea 0%, #764ba2 ${initialPercent}%, #ddd ${initialPercent}%, #ddd 100%)`;

    // Station selection buttons
    stationBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const stationId = this.getAttribute('data-station');
            
            // Find the matching station
            let stationIndex = 0;
            switch(stationId) {
                case 'body-energy':
                    stationIndex = 1;
                    break;
                case 'mind-focus':
                    stationIndex = 2;
                    break;
                case 'soul-harmony':
                    stationIndex = 3;
                    break;
                case 'holistic':
                    stationIndex = 4;
                    break;
                default:
                    stationIndex = 0;
            }
            
            currentStationIndex = stationIndex;
            updateStation();
            
            // Auto-play when selecting a station
            if (!isPlaying) {
                playBtn.click();
            } else {
                addStationChangeAnimation();
            }
            
            // Update button states
            stationBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to player
            document.querySelector('.radio-player').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // Update station display
    function updateStation() {
        const station = stations[currentStationIndex];
        stationName.textContent = station.name;
        trackInfo.textContent = station.track;
        
        // Update color based on category
        const display = document.querySelector('.player-display');
        switch(station.category) {
            case 'body':
                display.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
                break;
            case 'mind':
                display.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
                break;
            case 'soul':
                display.style.background = 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
                break;
            default:
                display.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    }

    // Add station change animation
    function addStationChangeAnimation() {
        const display = document.querySelector('.player-display');
        display.style.transform = 'scale(1.05)';
        setTimeout(() => {
            display.style.transform = 'scale(1)';
        }, 200);
    }

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
            }
            50% {
                box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
            }
        }
        
        .player-display {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Add fade-in animation for station cards
    const stationCards = document.querySelectorAll('.station-card');
    stationCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
});
