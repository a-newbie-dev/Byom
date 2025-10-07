// Journey Progress Card JavaScript

class JourneyProgress {
    constructor() {
        this.data = {
            bodyProgress: 65,
            mindProgress: 40,
            soulProgress: 80,
            daysPracticed: 23,
            currentStreak: 5,
            totalMinutes: 450
        };
        this.init();
    }

    init() {
        // Load saved data from localStorage
        this.loadSavedData();
        
        // Initialize progress rings
        this.initializeProgressRings();
        
        // Update overall progress
        this.updateOverallProgress();
        
        // Update stats
        this.updateStats();
        
        // Start animations
        setTimeout(() => this.animateProgress(), 500);
    }

    loadSavedData() {
        const savedData = localStorage.getItem('journeyData');
        if (savedData) {
            this.data = { ...this.data, ...JSON.parse(savedData) };
        }
    }

    saveData() {
        localStorage.setItem('journeyData', JSON.stringify(this.data));
    }

    initializeProgressRings() {
        const progressItems = document.querySelectorAll('.progress-item');
        
        progressItems.forEach(item => {
            const category = item.dataset.category;
            const progressBar = item.querySelector('.progress-bar');
            const progressValue = item.querySelector('.progress-value');
            
            let progress = 0;
            switch(category) {
                case 'body':
                    progress = this.data.bodyProgress;
                    break;
                case 'mind':
                    progress = this.data.mindProgress;
                    break;
                case 'soul':
                    progress = this.data.soulProgress;
                    break;
            }
            
            // Set initial state
            progressBar.style.strokeDashoffset = '251.2';
            progressValue.textContent = `${progress}%`;
            
            // Store progress for animation
            progressBar.dataset.progress = progress;
        });
    }

    animateProgress() {
        const progressItems = document.querySelectorAll('.progress-item');
        
        progressItems.forEach((item, index) => {
            setTimeout(() => {
                const progressBar = item.querySelector('.progress-bar');
                const progress = parseInt(progressBar.dataset.progress);
                
                // Calculate stroke-dashoffset for the progress
                const circumference = 251.2; // 2 * π * 40
                const offset = circumference - (progress / 100) * circumference;
                
                progressBar.style.strokeDashoffset = offset;
                
                // Animate the percentage counter
                this.animateCounter(item.querySelector('.progress-value'), 0, progress, 1500);
                
            }, index * 200);
        });

        // Animate overall progress bar
        setTimeout(() => {
            const overallFill = document.querySelector('.overall-fill');
            const overallProgress = this.calculateOverallProgress();
            
            if (overallFill) {
                overallFill.style.width = `${overallProgress}%`;
            }
        }, 800);
    }

    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOutCubic);
            
            element.textContent = `${current}%`;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }

    calculateOverallProgress() {
        return Math.round((this.data.bodyProgress + this.data.mindProgress + this.data.soulProgress) / 3);
    }

    updateOverallProgress() {
        const overallPercentage = document.querySelector('.overall-percentage');
        if (overallPercentage) {
            overallPercentage.textContent = `${this.calculateOverallProgress()}%`;
        }
    }

    updateStats() {
        const daysPracticed = document.getElementById('days-practiced');
        const currentStreak = document.getElementById('current-streak');
        const totalMinutes = document.getElementById('total-minutes');
        
        if (daysPracticed) daysPracticed.textContent = this.data.daysPracticed;
        if (currentStreak) currentStreak.textContent = this.data.currentStreak;
        if (totalMinutes) totalMinutes.textContent = this.data.totalMinutes;
    }

    updateProgress(category, newProgress) {
        // Validate input
        newProgress = Math.max(0, Math.min(100, newProgress));
        
        // Update data
        switch(category) {
            case 'body':
                this.data.bodyProgress = newProgress;
                break;
            case 'mind':
                this.data.mindProgress = newProgress;
                break;
            case 'soul':
                this.data.soulProgress = newProgress;
                break;
        }
        
        // Save to localStorage
        this.saveData();
        
        // Update UI
        this.updateProgressRing(category, newProgress);
        this.updateOverallProgress();
    }

    updateProgressRing(category, progress) {
        const progressItem = document.querySelector(`[data-category="${category}"]`);
        if (!progressItem) return;
        
        const progressBar = progressItem.querySelector('.progress-bar');
        const progressValue = progressItem.querySelector('.progress-value');
        
        // Calculate new stroke-dashoffset
        const circumference = 251.2;
        const offset = circumference - (progress / 100) * circumference;
        
        // Animate to new progress
        progressBar.style.strokeDashoffset = offset;
        
        // Animate counter
        const currentProgress = parseInt(progressValue.textContent);
        this.animateCounter(progressValue, currentProgress, progress, 1000);
        
        // Update overall progress bar
        setTimeout(() => {
            const overallFill = document.querySelector('.overall-fill');
            const overallProgress = this.calculateOverallProgress();
            
            if (overallFill) {
                overallFill.style.width = `${overallProgress}%`;
            }
            
            // Update overall percentage
            this.updateOverallProgress();
        }, 100);
    }

    // Public methods for external use
    incrementProgress(category, amount = 5) {
        let currentProgress = 0;
        switch(category) {
            case 'body':
                currentProgress = this.data.bodyProgress;
                break;
            case 'mind':
                currentProgress = this.data.mindProgress;
                break;
            case 'soul':
                currentProgress = this.data.soulProgress;
                break;
        }
        
        this.updateProgress(category, currentProgress + amount);
    }

    resetProgress() {
        this.data = {
            bodyProgress: 0,
            mindProgress: 0,
            soulProgress: 0,
            daysPracticed: 0,
            currentStreak: 0,
            totalMinutes: 0
        };
        
        this.saveData();
        this.init();
    }

    // Add achievement tracking
    checkAchievements() {
        const achievements = [];
        
        if (this.data.bodyProgress >= 50) {
            achievements.push('Body Awareness Master');
        }
        
        if (this.data.mindProgress >= 50) {
            achievements.push('Mental Clarity Expert');
        }
        
        if (this.data.soulProgress >= 50) {
            achievements.push('Spiritual Seeker');
        }
        
        if (this.calculateOverallProgress() >= 75) {
            achievements.push('Journey Pioneer');
        }
        
        if (this.data.currentStreak >= 7) {
            achievements.push('Dedicated Practitioner');
        }
        
        return achievements;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create global instance
    window.journeyProgress = new JourneyProgress();
    
    // Add some interactive features
    setupProgressInteractions();
});

function setupProgressInteractions() {
    // Add click handlers for progress items (for demo purposes)
    document.querySelectorAll('.progress-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Add a small visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You could add modal or detail view here
            console.log(`Clicked on ${category} progress`);
        });
    });
    
    // Add keyboard shortcuts for testing (remove in production)
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    window.journeyProgress.incrementProgress('body');
                    break;
                case '2':
                    window.journeyProgress.incrementProgress('mind');
                    break;
                case '3':
                    window.journeyProgress.incrementProgress('soul');
                    break;
                case '0':
                    if (confirm('Reset all progress?')) {
                        window.journeyProgress.resetProgress();
                    }
                    break;
            }
        }
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JourneyProgress;
}
