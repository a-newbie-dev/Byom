

class HappinessModule {
    constructor() {
        this.moodData = this.loadMoodData();
        this.gratitudeData = this.loadGratitudeData();
        this.smileData = this.loadSmileData();
        this.kindnessData = this.loadKindnessData();
        this.favoriteQuotes = this.loadFavoriteQuotes();
        this.coinBalance = this.loadCoinBalance();
        this.purchasedItems = this.loadPurchasedItems();
        this.init();
    }

    init() {
        this.initMoodTracker();
        this.initGratitude();
        this.initAffirmations();
        this.initSmileCounter();
        this.initKindness();
        this.initJoyActivities();
        this.initBuyHappiness();
        this.initQuotes();
        this.updateDashboard();
    }

    // Mood Tracker
    initMoodTracker() {
        const moodBtns = document.querySelectorAll('.mood-btn');
        const saveMoodBtn = document.querySelector('.save-mood-btn');
        const moodInput = document.querySelector('.mood-input');
        
        // Check if elements exist
        if (!moodBtns.length || !saveMoodBtn || !moodInput) {
            console.error('Mood tracker elements not found');
            return;
        }
        
        moodBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                moodBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });

        saveMoodBtn.addEventListener('click', () => {
            const selectedMood = document.querySelector('.mood-btn.selected');
            if (selectedMood) {
                const mood = selectedMood.dataset.mood;
                const description = moodInput.value || '';
                this.saveMood(mood, description);
                moodInput.value = '';
                selectedMood.classList.remove('selected');
                this.updateMoodChart();
            } else {
                this.showNotification('Please select a mood first! 😊', 'info');
            }
        });

        this.updateMoodChart();
    }

    saveMood(mood, description) {
        const today = new Date().toDateString();
        this.moodData[today] = { mood, description, timestamp: Date.now() };
        this.saveMoodData();
        
        // Award coins for daily mood tracking (silently)
        this.coinBalance += 5;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        
        // Check for streak bonus
        this.checkMoodStreak();
        
        // Show combined notification
        this.showNotification('Mood saved! +5 coins earned! 😊💰', 'success');
    }

    updateMoodChart() {
        const weekDays = this.getLastWeek();
        const moodBars = document.querySelectorAll('.mood-bar');
        
        moodBars.forEach((bar, index) => {
            const day = weekDays[index];
            const dayData = this.moodData[day];
            
            if (dayData) {
                const moodValues = { 
                    sad: 20, 
                    okay: 40, 
                    good: 60, 
                    happy: 80, 
                    amazing: 100 
                };
                const height = moodValues[dayData.mood] || 20;
                bar.style.height = `${height}%`;
                
                if (day === new Date().toDateString()) {
                    bar.parentElement.classList.add('active');
                }
            } else {
                bar.style.height = '10%';
            }
        });

        // Update streak
        const streak = this.calculateMoodStreak();
        const streakEl = document.querySelector('.mood-streak');
        if (streakEl) streakEl.textContent = `${streak} day streak`;
    }

    calculateMoodStreak() {
        let streak = 0;
        let currentDate = new Date();
        
        while (true) {
            const dateStr = currentDate.toDateString();
            if (this.moodData[dateStr]) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
    }

    // Gratitude Journal
    initGratitude() {
        const addBtn = document.querySelector('.add-gratitude-btn');
        const textarea = document.querySelector('.gratitude-input-section textarea');
        
        addBtn.addEventListener('click', () => {
            const text = textarea.value.trim();
            if (text) {
                this.addGratitude(text);
                textarea.value = '';
                this.updateGratitudeList();
            }
        });

        this.updateGratitudeList();
    }

    addGratitude(text) {
        const entry = {
            text,
            date: new Date().toLocaleDateString(),
            timestamp: Date.now()
        };
        this.gratitudeData.push(entry);
        this.saveGratitudeData();
        
        // Award coins for gratitude entry (silently)
        this.coinBalance += 3;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        
        // Show combined notification
        this.showNotification('Gratitude added! +3 coins earned! 🙏💰', 'success');
    }

    updateGratitudeList() {
        const list = document.querySelector('.gratitude-list');
        const recent = this.gratitudeData.slice(-5).reverse();
        
        list.innerHTML = recent.map(entry => `
            <div class="gratitude-item">
                <div class="gratitude-text">${entry.text}</div>
                <div class="gratitude-meta">${entry.date}</div>
            </div>
        `).join('');

        // Update count
        const countEl = document.querySelector('.gratitude-count');
        if (countEl) countEl.textContent = `${this.gratitudeData.length} entries`;
    }

    // Daily Affirmations
    initAffirmations() {
        this.affirmations = {
            confidence: [
                "I am confident and capable of achieving anything I set my mind to.",
                "I believe in myself and my abilities.",
                "I radiate confidence and positivity wherever I go.",
                "I am worthy of all the good things that come into my life.",
                "I trust myself to make the right decisions."
            ],
            self_love: [
                "I love and accept myself exactly as I am.",
                "I am worthy of love and respect.",
                "I treat myself with kindness and compassion.",
                "I celebrate my unique qualities and strengths.",
                "I am enough, just as I am."
            ],
            success: [
                "I am creating the life of my dreams.",
                "Success flows to me easily and naturally.",
                "I am aligned with my purpose and passion.",
                "Every challenge is an opportunity to grow stronger.",
                "I am grateful for all the abundance in my life."
            ],
            peace: [
                "I am at peace with myself and the world around me.",
                "I choose to focus on what brings me joy.",
                "I release all worries and embrace the present moment.",
                "I am surrounded by love and positive energy.",
                "I trust that everything is working out for my highest good."
            ]
        };

        const refreshBtn = document.querySelector('.refresh-affirmation');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const favoriteBtn = document.querySelector('.favorite-affirmation');
        const shareBtn = document.querySelector('.share-affirmation');

        refreshBtn.addEventListener('click', () => this.showRandomAffirmation());
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.showRandomAffirmation(btn.dataset.category);
            });
        });

        favoriteBtn.addEventListener('click', () => this.favoriteCurrentAffirmation());
        shareBtn.addEventListener('click', () => this.shareAffirmation());

        this.showRandomAffirmation();
    }

    showRandomAffirmation(category = 'confidence') {
        const affirmations = this.affirmations[category];
        const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        
        const textEl = document.querySelector('.affirmation-text');
        textEl.style.opacity = '0';
        
        setTimeout(() => {
            textEl.textContent = randomAffirmation;
            textEl.style.opacity = '1';
        }, 200);
    }

    favoriteCurrentAffirmation() {
        const affirmationText = document.querySelector('.affirmation-text').textContent;
        if (!this.favoriteQuotes.includes(affirmationText)) {
            this.favoriteQuotes.push(affirmationText);
            this.saveFavoriteQuotes();
            
            // Award coins for favoriting affirmation (silently)
            this.coinBalance += 2;
            this.saveCoinBalance();
            this.updateCoinDisplay();
            this.animateCoins();
            
            this.showNotification('Affirmation saved to favorites! +2 coins earned! 💜💰', 'success');
        }
    }

    shareAffirmation() {
        const affirmationText = document.querySelector('.affirmation-text').textContent;
        if (navigator.share) {
            navigator.share({
                title: 'Daily Affirmation',
                text: affirmationText
            });
        } else {
            navigator.clipboard.writeText(affirmationText);
            this.showNotification('Affirmation copied to clipboard! 📋', 'info');
        }
    }

    // Smile Counter
    initSmileCounter() {
        const smileBtn = document.querySelector('.smile-btn');
        const laughBtn = document.querySelector('.laugh-btn');
        
        smileBtn.addEventListener('click', () => {
            this.incrementSmile();
            this.animateSmileButton(smileBtn);
        });

        laughBtn.addEventListener('click', () => {
            this.incrementLaugh();
            this.animateSmileButton(laughBtn);
        });

        this.updateSmileDisplay();
    }

    incrementSmile() {
        const today = new Date().toDateString();
        if (!this.smileData[today]) {
            this.smileData[today] = { smiles: 0, laughs: 0 };
        }
        this.smileData[today].smiles++;
        this.saveSmileData();
        this.updateSmileDisplay();
        
        // Award coins for sharing a smile (silently)
        this.coinBalance += 2;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        
        this.showNotification('Smile counted! +2 coins earned! 😊💰', 'success');
    }

    incrementLaugh() {
        const today = new Date().toDateString();
        if (!this.smileData[today]) {
            this.smileData[today] = { smiles: 0, laughs: 0 };
        }
        this.smileData[today].laughs++;
        this.saveSmileData();
        this.updateSmileDisplay();
        
        // Award coins for laughing (silently)
        this.coinBalance += 3;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        
        this.showNotification('Laugh counted! +3 coins earned! 😂💰', 'success');
    }

    animateSmileButton(button) {
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    updateSmileDisplay() {
        const today = new Date().toDateString();
        const todayData = this.smileData[today] || { smiles: 0, laughs: 0 };
        const total = todayData.smiles + todayData.laughs;
        
        const numberEl = document.querySelector('.smile-number');
        if (numberEl) numberEl.textContent = total;

        this.updateSmileChart();
        
        // Update streak
        const streak = this.calculateSmileStreak();
        const streakEl = document.querySelector('.smile-streak');
        if (streakEl) streakEl.textContent = `${streak} day streak`;
    }

    updateSmileChart() {
        const weekDays = this.getLastWeek();
        const smileBars = document.querySelectorAll('.smile-bar');
        
        smileBars.forEach((bar, index) => {
            const day = weekDays[index];
            const dayData = this.smileData[day];
            
            if (dayData) {
                const total = dayData.smiles + dayData.laughs;
                const height = Math.min((total / 10) * 100, 100); // Max 10 smiles/laughs for full bar
                bar.style.height = `${height}%`;
                
                if (day === new Date().toDateString()) {
                    bar.parentElement.classList.add('active');
                }
            } else {
                bar.style.height = '5%';
            }
        });
    }

    calculateSmileStreak() {
        let streak = 0;
        let currentDate = new Date();
        
        while (true) {
            const dateStr = currentDate.toDateString();
            const dayData = this.smileData[dateStr];
            if (dayData && (dayData.smiles > 0 || dayData.laughs > 0)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
    }

    // Acts of Kindness
    initKindness() {
        this.kindnessIdeas = [
            { icon: '🌱', title: 'Help a colleague', description: 'Offer to help a coworker with a project or task.' },
            { icon: '💌', title: 'Send a thank you note', description: 'Write a heartfelt thank you note to someone who helped you.' },
            { icon: '🍪', title: 'Bake for neighbors', description: 'Bake cookies or treats and share them with your neighbors.' },
            { icon: '🚪', title: 'Hold the door', description: 'Hold the door open for someone behind you.' },
            { icon: '☕', title: 'Buy coffee for a stranger', description: 'Pay for someone\'s coffee in line behind you.' },
            { icon: '📞', title: 'Call a friend', description: 'Call a friend or family member just to check in on them.' },
            { icon: '🎁', title: 'Donate items', description: 'Donate clothes or items you no longer need to charity.' },
            { icon: '🌺', title: 'Compliment someone', description: 'Give a genuine compliment to brighten someone\'s day.' }
        ];

        const doneBtn = document.querySelector('.done-kindness');
        const skipBtn = document.querySelector('.skip-kindness');
        
        doneBtn.addEventListener('click', () => this.completeKindness());
        skipBtn.addEventListener('click', () => this.skipKindness());

        this.showRandomKindness();
        this.updateKindnessList();
    }

    showRandomKindness() {
        const idea = this.kindnessIdeas[Math.floor(Math.random() * this.kindnessIdeas.length)];
        
        const iconEl = document.querySelector('.kindness-icon');
        const titleEl = document.querySelector('.kindness-text strong');
        const descEl = document.querySelector('.kindness-text p');
        
        if (iconEl) iconEl.textContent = idea.icon;
        if (titleEl) titleEl.textContent = idea.title;
        if (descEl) descEl.textContent = idea.description;
    }

    completeKindness() {
        const titleEl = document.querySelector('.kindness-text strong');
        if (titleEl) {
            const kindness = {
                title: titleEl.textContent,
                date: new Date().toLocaleDateString(),
                completed: true,
                timestamp: Date.now()
            };
            
            this.kindnessData.push(kindness);
            this.saveKindnessData();
            this.updateKindnessList();
            this.showRandomKindness();
            
            // Award coins for completing kindness act (silently)
            this.coinBalance += 10;
            this.saveCoinBalance();
            this.updateCoinDisplay();
            this.animateCoins();
            
            this.showNotification('Kindness completed! +10 coins earned! You\'re amazing! 💖💰', 'success');
        }
    }

    skipKindness() {
        this.showRandomKindness();
        this.showNotification('No worries! Here\'s another idea 🌟', 'info');
    }

    updateKindnessList() {
        const list = document.querySelector('.kindness-list');
        const recent = this.kindnessData.slice(-5).reverse();
        
        list.innerHTML = recent.map(item => `
            <div class="kindness-item ${item.completed ? 'completed' : ''}">
                <span class="kindness-emoji">💖</span>
                <span class="kindness-description">${item.title}</span>
                <span class="kindness-date">${item.date}</span>
            </div>
        `).join('');

        // Update count
        const countEl = document.querySelector('.kindness-count');
        if (countEl) countEl.textContent = `${this.kindnessData.length} acts`;
    }

    // Joy Activities
    initJoyActivities() {
        this.joyActivities = [
            { icon: '🎨', title: 'Creative Art', description: 'Draw, paint, or craft something beautiful', time: '30 min', mood: 'creative' },
            { icon: '🌳', title: 'Nature Walk', description: 'Take a peaceful walk in nature', time: '20 min', mood: 'peaceful' },
            { icon: '📚', title: 'Read a Book', description: 'Dive into an inspiring story or learn something new', time: '30 min', mood: 'inspired' },
            { icon: '🎵', title: 'Listen to Music', description: 'Play your favorite uplifting songs', time: '15 min', mood: 'energetic' },
            { icon: '🧘', title: 'Meditation', description: 'Practice mindfulness and inner peace', time: '10 min', mood: 'peaceful' },
            { icon: '💃', title: 'Dance Party', description: 'Dance to your favorite music', time: '15 min', mood: 'energetic' },
            { icon: '📱', title: 'Call a Friend', description: 'Connect with someone you care about', time: '20 min', mood: 'social' },
            { icon: '🍳', title: 'Cook Something New', description: 'Try a new recipe or cook your favorite meal', time: '45 min', mood: 'creative' },
            { icon: '🌅', title: 'Watch Sunrise/Sunset', description: 'Appreciate the beauty of nature', time: '20 min', mood: 'peaceful' },
            { icon: '✍️', title: 'Journal Writing', description: 'Write about your thoughts and feelings', time: '15 min', mood: 'reflective' }
        ];

        const filterSelect = document.querySelector('.mood-filter');
        filterSelect.addEventListener('change', () => this.filterActivities(filterSelect.value));

        this.displayActivities();
    }

    filterActivities(mood) {
        const filtered = mood === 'all' ? this.joyActivities : 
                        this.joyActivities.filter(activity => activity.mood === mood);
        this.displayActivities(filtered);
    }

    displayActivities(activities = this.joyActivities) {
        const grid = document.querySelector('.activities-grid');
        
        grid.innerHTML = activities.map(activity => `
            <div class="activity-card">
                <span class="activity-icon">${activity.icon}</span>
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <div class="activity-meta">
                    <span class="activity-time">⏱️ ${activity.time}</span>
                    <span class="activity-mood">😊 ${activity.mood}</span>
                </div>
                <button class="try-activity" onclick="happinessModule.tryActivity('${activity.title}')">
                    Try This Activity
                </button>
            </div>
        `).join('');
    }

    tryActivity(title) {
        // Award coins for trying new activity (silently)
        this.coinBalance += 5;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        
        this.showNotification(`Great choice! Enjoy ${title} +5 coins earned! 🌟💰`, 'success');
        // Could add activity tracking here
    }

    // Buy Happiness Store
    initBuyHappiness() {
        this.storeItems = {
            'meditation-pack': { name: 'Premium Meditation Pack', price: 50, type: 'activity' },
            'workout-collection': { name: 'Happy Workout Collection', price: 75, type: 'activity' },
            'recipe-book': { name: 'Mood-Boosting Recipe Book', price: 40, type: 'activity' },
            'creativity-kit': { name: 'Creative Happiness Kit', price: 60, type: 'activity' },
            'premium-analytics': { name: 'Premium Analytics', price: 100, type: 'feature' },
            'custom-affirmations': { name: 'Custom Affirmations', price: 80, type: 'feature' },
            'happiness-coach': { name: 'AI Happiness Coach', price: 120, type: 'feature' },
            'social-features': { name: 'Social Happiness Features', price: 90, type: 'feature' },
            'happiness-starter': { name: 'Happiness Starter Bundle', price: 200, type: 'bundle' },
            'complete-happiness': { name: 'Complete Happiness Suite', price: 350, type: 'bundle' },
            'wellness-combo': { name: 'Wellness Combo', price: 150, type: 'bundle' }
        };

        const storeTabs = document.querySelectorAll('.store-tab');
        const storeContents = document.querySelectorAll('.store-content');
        const buyBtns = document.querySelectorAll('.buy-btn');
        const earnCoinsBtn = document.querySelector('.earn-coins-btn');

        // Tab switching
        storeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                storeTabs.forEach(t => t.classList.remove('active'));
                storeContents.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.querySelector(`.${targetTab}-store`).classList.add('active');
            });
        });

        // Buy button handlers
        buyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.dataset.item;
                this.purchaseItem(itemId, btn);
            });
        });

        // Earn coins info
        if (earnCoinsBtn) {
            earnCoinsBtn.addEventListener('click', () => {
                this.showEarnCoinsInfo();
            });
        }

        this.updateCoinDisplay();
        this.updatePurchasedItems();
    }

    purchaseItem(itemId, buttonElement) {
        const item = this.storeItems[itemId];
        if (!item) return;

        // Check if already purchased
        if (this.purchasedItems.includes(itemId)) {
            this.showNotification('You already own this item! 🎉', 'info');
            return;
        }

        // Check if enough coins
        if (this.coinBalance < item.price) {
            this.showNotification(`Not enough coins! You need ${item.price - this.coinBalance} more coins. 💰`, 'error');
            return;
        }

        // Confirm purchase
        if (confirm(`Buy "${item.name}" for ${item.price} coins?`)) {
            // Deduct coins
            this.coinBalance -= item.price;
            this.saveCoinBalance();

            // Add to purchased items
            this.purchasedItems.push(itemId);
            this.savePurchasedItems();

            // Update UI
            this.updateCoinDisplay();
            this.updatePurchaseButton(buttonElement, itemId);

            // Animations
            this.animatePurchase(buttonElement);
            this.animateCoins();

            // Award bonus coins for first purchase
            if (this.purchasedItems.length === 1) {
                setTimeout(() => {
                    this.awardCoins(25, 'First purchase bonus! 🎁');
                }, 1000);
            }

            this.showNotification(`Successfully purchased "${item.name}"! 🎉`, 'success');
            
            // Unlock premium features
            this.unlockPremiumFeatures(itemId);
        }
    }

    unlockPremiumFeatures(itemId) {
        switch (itemId) {
            case 'premium-analytics':
                this.showNotification('Premium Analytics unlocked! Check your detailed mood insights. 📊', 'success');
                break;
            case 'custom-affirmations':
                this.showNotification('Custom Affirmations unlocked! Create personal affirmations now. 💝', 'success');
                break;
            case 'happiness-coach':
                this.showNotification('AI Happiness Coach activated! Your personal guide is ready. 🤖', 'success');
                break;
            case 'meditation-pack':
                this.addPremiumActivities('meditation');
                break;
            case 'workout-collection':
                this.addPremiumActivities('workout');
                break;
            case 'complete-happiness':
                this.showNotification('Complete Happiness Suite unlocked! All premium features available! 💎', 'success');
                break;
        }
    }

    addPremiumActivities(type) {
        const activitiesGrid = document.querySelector('.activities-grid');
        if (!activitiesGrid) return;

        const premiumActivities = {
            meditation: [
                { icon: '🧘‍♀️', title: 'Guided Meditation', description: 'Premium guided sessions with nature sounds', time: '10-30 min', mood: 'peaceful' },
                { icon: '🌊', title: 'Ocean Breathing', description: 'Deep breathing with ocean wave sounds', time: '5-15 min', mood: 'calm' }
            ],
            workout: [
                { icon: '🏃‍♀️', title: 'Happy Run', description: 'Energizing cardio with upbeat music', time: '20-45 min', mood: 'energetic' },
                { icon: '🤸‍♀️', title: 'Joy Yoga', description: 'Mood-boosting yoga sequences', time: '15-60 min', mood: 'balanced' }
            ]
        };

        const activities = premiumActivities[type] || [];
        activities.forEach(activity => {
            const card = document.createElement('div');
            card.className = 'activity-card premium-activity';
            card.innerHTML = `
                <div class="activity-icon">${activity.icon}</div>
                <div class="premium-badge">PREMIUM</div>
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <div class="activity-meta">
                    <span class="activity-time">⏱️ ${activity.time}</span>
                    <span class="activity-mood">😊 ${activity.mood}</span>
                </div>
                <button class="try-activity premium" onclick="happinessModule.tryPremiumActivity('${activity.title}')">
                    Try Premium Activity
                </button>
            `;
            activitiesGrid.appendChild(card);
        });
    }

    tryPremiumActivity(title) {
        this.showNotification(`Enjoying ${title}! Premium experience unlocked! ⭐`, 'success');
    }

    awardCoins(amount, reason = 'Great job!') {
        this.coinBalance += amount;
        this.saveCoinBalance();
        this.updateCoinDisplay();
        this.animateCoins();
        this.showNotification(`+${amount} coins! ${reason} 💰`, 'success');
    }

    animatePurchase(buttonElement) {
        buttonElement.classList.add('purchase-success');
        setTimeout(() => {
            buttonElement.classList.remove('purchase-success');
        }, 400);
    }

    animateCoins() {
        const coinBalance = document.querySelector('.coin-balance');
        if (coinBalance) {
            coinBalance.classList.add('coin-animation');
            setTimeout(() => {
                coinBalance.classList.remove('coin-animation');
            }, 600);
        }
    }

    updateCoinDisplay() {
        const coinCount = document.getElementById('coin-count');
        if (coinCount) {
            coinCount.textContent = this.coinBalance;
        }
    }

    updatePurchasedItems() {
        const buyBtns = document.querySelectorAll('.buy-btn');
        buyBtns.forEach(btn => {
            const itemId = btn.dataset.item;
            if (this.purchasedItems.includes(itemId)) {
                this.updatePurchaseButton(btn, itemId);
            }
        });
    }

    updatePurchaseButton(button, itemId) {
        button.textContent = '✅ Purchased';
        button.classList.add('purchased');
        button.disabled = true;
    }

    showEarnCoinsInfo() {
        const info = `
        🪙 Ways to Earn Coins:
        
        • Save daily mood: +5 coins
        • Add gratitude entry: +3 coins  
        • Complete act of kindness: +10 coins
        • Share a smile: +2 coins
        • Count a laugh: +3 coins
        • Try new activity: +5 coins
        • Favorite affirmation: +2 coins
        • Favorite quote: +2 coins
        • 7-day mood streak: +25 coins bonus
        • First purchase bonus: +25 coins
        • Weekly consistency bonus: +50 coins
        
        Keep using Byom to earn more coins! 🌟
        `;
        
        this.showNotification(info.trim(), 'info');
    }
    initQuotes() {
        this.quotes = [
            { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
            { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
            { text: "The happiest people don't have the best of everything, they just make the best of everything.", author: "Unknown" },
            { text: "Happiness is not a goal; it is a by-product.", author: "Eleanor Roosevelt" },
            { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
            { text: "Happiness depends upon ourselves.", author: "Aristotle" },
            { text: "The key to being happy is knowing you have the power to choose what to accept and what to let go.", author: "Dodinsky" }
        ];

        const newQuoteBtn = document.querySelector('.new-quote-btn');
        const favoriteQuoteBtn = document.querySelector('.favorite-quote');
        const shareQuoteBtn = document.querySelector('.share-quote');
        const copyQuoteBtn = document.querySelector('.copy-quote');

        newQuoteBtn.addEventListener('click', () => this.showRandomQuote());
        favoriteQuoteBtn.addEventListener('click', () => this.favoriteCurrentQuote());
        shareQuoteBtn.addEventListener('click', () => this.shareQuote());
        copyQuoteBtn.addEventListener('click', () => this.copyQuote());

        this.showRandomQuote();
        this.updateFavoriteQuotes();
    }

    showRandomQuote() {
        const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        
        const textEl = document.querySelector('.quote-text');
        const authorEl = document.querySelector('.quote-author');
        
        textEl.style.opacity = '0';
        authorEl.style.opacity = '0';
        
        setTimeout(() => {
            textEl.textContent = `"${quote.text}"`;
            authorEl.textContent = `— ${quote.author}`;
            textEl.style.opacity = '1';
            authorEl.style.opacity = '1';
        }, 200);
    }

    favoriteCurrentQuote() {
        const quoteText = document.querySelector('.quote-text').textContent;
        const quoteAuthor = document.querySelector('.quote-author').textContent;
        const fullQuote = `${quoteText} ${quoteAuthor}`;
        
        if (!this.favoriteQuotes.includes(fullQuote)) {
            this.favoriteQuotes.push(fullQuote);
            this.saveFavoriteQuotes();
            this.updateFavoriteQuotes();
            
            // Award coins for favoriting quote (silently)
            this.coinBalance += 2;
            this.saveCoinBalance();
            this.updateCoinDisplay();
            this.animateCoins();
            
            this.showNotification('Quote saved to favorites! +2 coins earned! 💙💰', 'success');
        }
    }

    shareQuote() {
        const quoteText = document.querySelector('.quote-text').textContent;
        const quoteAuthor = document.querySelector('.quote-author').textContent;
        const fullQuote = `${quoteText} ${quoteAuthor}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Happiness Quote',
                text: fullQuote
            });
        } else {
            navigator.clipboard.writeText(fullQuote);
            this.showNotification('Quote copied to clipboard! 📋', 'info');
        }
    }

    copyQuote() {
        const quoteText = document.querySelector('.quote-text').textContent;
        const quoteAuthor = document.querySelector('.quote-author').textContent;
        const fullQuote = `${quoteText} ${quoteAuthor}`;
        
        navigator.clipboard.writeText(fullQuote);
        this.showNotification('Quote copied to clipboard! 📋', 'info');
    }

    updateFavoriteQuotes() {
        const list = document.querySelector('.favorite-list');
        
        list.innerHTML = this.favoriteQuotes.slice(-3).reverse().map(quote => `
            <div class="favorite-quote-item">${quote}</div>
        `).join('');
    }

    // Utility Methods
    getLastWeek() {
        const days = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            days.push(date.toDateString());
        }
        
        return days;
    }

    updateDashboard() {
        // This could be expanded to show overall happiness metrics
        this.updateStreakDisplay();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '1000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Data Storage Methods
    loadMoodData() {
        try {
            const stored = localStorage.getItem('byom_mood_data');
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error('Error loading mood data:', e);
            return {};
        }
    }

    saveMoodData() {
        try {
            localStorage.setItem('byom_mood_data', JSON.stringify(this.moodData));
        } catch (e) {
            console.error('Error saving mood data:', e);
        }
    }

    loadGratitudeData() {
        try {
            const stored = localStorage.getItem('byom_gratitude_data');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading gratitude data:', e);
            return [];
        }
    }

    saveGratitudeData() {
        try {
            localStorage.setItem('byom_gratitude_data', JSON.stringify(this.gratitudeData));
        } catch (e) {
            console.error('Error saving gratitude data:', e);
        }
    }

    loadSmileData() {
        try {
            const stored = localStorage.getItem('byom_smile_data');
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error('Error loading smile data:', e);
            return {};
        }
    }

    saveSmileData() {
        try {
            localStorage.setItem('byom_smile_data', JSON.stringify(this.smileData));
        } catch (e) {
            console.error('Error saving smile data:', e);
        }
    }

    loadKindnessData() {
        try {
            const stored = localStorage.getItem('byom_kindness_data');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading kindness data:', e);
            return [];
        }
    }

    saveKindnessData() {
        try {
            localStorage.setItem('byom_kindness_data', JSON.stringify(this.kindnessData));
        } catch (e) {
            console.error('Error saving kindness data:', e);
        }
    }

    loadFavoriteQuotes() {
        try {
            const stored = localStorage.getItem('byom_favorite_quotes');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading favorite quotes:', e);
            return [];
        }
    }

    saveFavoriteQuotes() {
        try {
            localStorage.setItem('byom_favorite_quotes', JSON.stringify(this.favoriteQuotes));
        } catch (e) {
            console.error('Error saving favorite quotes:', e);
        }
    }

    // Helper functions for coin system
    checkMoodStreak() {
        const days = Object.keys(this.moodData).sort();
        let currentStreak = 0;
        let today = new Date();
        
        // Check backwards from today for consecutive days
        for (let i = 0; i < 7; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() - i);
            const dateStr = checkDate.toDateString();
            
            if (this.moodData[dateStr]) {
                currentStreak++;
            } else {
                break;
            }
        }
        
        // Award streak bonus
        if (currentStreak === 7) {
            this.awardCoins(25, '7-day mood streak bonus!');
        }
    }

    saveCoinBalance() {
        try {
            localStorage.setItem('byom_coin_balance', this.coinBalance.toString());
        } catch (e) {
            console.error('Error saving coin balance:', e);
        }
    }

    loadCoinBalance() {
        try {
            const saved = localStorage.getItem('byom_coin_balance');
            return saved ? parseInt(saved) : 50; // Start with 50 coins
        } catch (e) {
            console.error('Error loading coin balance:', e);
            return 50;
        }
    }

    savePurchasedItems() {
        try {
            localStorage.setItem('byom_purchased_items', JSON.stringify(this.purchasedItems));
        } catch (e) {
            console.error('Error saving purchased items:', e);
        }
    }

    loadPurchasedItems() {
        try {
            const saved = localStorage.getItem('byom_purchased_items');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Error loading purchased items:', e);
            return [];
        }
    }

    // Happiness Quotes
    showRandomQuote() {
        const quotes = [
            "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
            "The purpose of our lives is to be happy. - Dalai Lama",
            "Happiness is a warm puppy. - Charles M. Schulz",
            "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson",
            "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Life is really simple, but we insist on making it complicated. - Confucius",
            "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
        ];
        
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const quoteEl = document.querySelector('.daily-quote .quote-text');
        if (quoteEl) {
            quoteEl.textContent = randomQuote;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.happinessModule = new HappinessModule();
});

// Add smooth transitions for all elements
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .affirmation-text, .quote-text, .quote-author {
            transition: opacity 0.3s ease;
        }
        
        .mood-btn, .activity-card, .gratitude-item, .kindness-item {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
