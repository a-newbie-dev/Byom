// Words page functionality

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('word-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const wordCards = document.querySelectorAll('.word-card');
    const suggestedWordInput = document.getElementById('suggested-word');

    // Get currently active filter
    function getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    }

    // Update no results message
    function updateNoResultsMessage() {
        const visibleCards = document.querySelectorAll('.word-card:not(.hidden)');
        const existingMessage = document.querySelector('.no-results-message');
        
        if (visibleCards.length === 0) {
            if (!existingMessage) {
                const message = document.createElement('div');
                message.className = 'no-results-message';
                message.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: #666;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                        <h3>No words found</h3>
                        <p>Try adjusting your search or filter to find more words.</p>
                    </div>
                `;
                document.querySelector('.words-grid').appendChild(message);
            }
        } else {
            if (existingMessage) {
                existingMessage.remove();
            }
        }
    }

    // Update word count display
    function updateWordCount() {
        const visibleCards = document.querySelectorAll('.word-card:not(.hidden)');
        const totalCards = document.querySelectorAll('.word-card');
        
        let countDisplay = document.querySelector('.word-count-display');
        if (!countDisplay) {
            countDisplay = document.createElement('div');
            countDisplay.className = 'word-count-display';
            document.querySelector('.words-grid').before(countDisplay);
        }
        
        if (visibleCards.length === totalCards.length) {
            countDisplay.textContent = `Showing all ${totalCards.length} words`;
        } else {
            countDisplay.textContent = `Showing ${visibleCards.length} of ${totalCards.length} words`;
        }
    }

    // Filter words based on search term and category
    function filterWords(searchTerm, category) {
        wordCards.forEach(card => {
            const wordTitle = card.querySelector('.word-title').textContent.toLowerCase();
            const wordContent = card.querySelector('.word-content').textContent.toLowerCase();
            const cardCategories = card.getAttribute('data-category');
            
            // Check if matches search term
            const matchesSearch = searchTerm === '' || 
                                wordTitle.includes(searchTerm) || 
                                wordContent.includes(searchTerm);
            
            // Check if matches category filter
            const matchesCategory = category === 'all' || 
                                  cardCategories.includes(category);
            
            // Show/hide card based on both conditions
            if (matchesSearch && matchesCategory) {
                card.classList.remove('hidden');
                // Add a subtle animation when showing
                card.style.animation = 'slideIn 0.3s ease-out';
            } else {
                card.classList.add('hidden');
            }
        });

        // Show no results message if all cards are hidden
        updateNoResultsMessage();
        updateWordCount();
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterWords(searchTerm, getActiveFilter());
        });
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
            filterWords(searchTerm, category);
        });
    });

    // Add smooth scrolling to word cards when they appear
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.5s ease-out';
            }
        });
    }, {
        threshold: 0.1
    });

    wordCards.forEach(card => {
        observer.observe(card);
    });

    // Auto-focus search input when typing (if not already focused)
    document.addEventListener('keydown', function(e) {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && 
            document.activeElement !== searchInput && 
            document.activeElement !== suggestedWordInput) {
            if (searchInput) {
                searchInput.focus();
                searchInput.value = e.key;
                // Trigger search
                const event = new Event('input');
                searchInput.dispatchEvent(event);
            }
        }
    });

    // Clear search with Escape key
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                filterWords('', getActiveFilter());
            }
        });
    }

    // Keyboard navigation for filters
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '4') {
            const filterIndex = parseInt(e.key) - 1;
            const filterBtn = filterButtons[filterIndex];
            if (filterBtn) {
                filterBtn.click();
            }
        }
    });

    // Handle Enter key for word suggestion
    if (suggestedWordInput) {
        suggestedWordInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                suggestWord();
            }
        });
    }

    // Initialize word count on page load
    updateWordCount();
});

// Word suggestion functionality
function suggestWord() {
    const input = document.getElementById('suggested-word');
    if (!input) return;
    
    const word = input.value.trim();
    
    if (word) {
        // Create a simple feedback
        const originalBtn = document.querySelector('.suggest-btn');
        if (!originalBtn) return;
        
        const originalText = originalBtn.textContent;
        
        originalBtn.textContent = 'Thank you! 🙏';
        originalBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
        
        // Reset input
        input.value = '';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            originalBtn.textContent = originalText;
            originalBtn.style.background = 'linear-gradient(135deg, #8E44AD, #3498DB)';
        }, 2000);
        
        // In a real application, you would send this to a server
        console.log('Word suggested:', word);
        
        // Show a thank you message
        showThankYouMessage(word);
    }
}

// Show thank you message for suggestions
function showThankYouMessage(word) {
    const message = document.createElement('div');
    message.className = 'thank-you-message';
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        ">
            <strong>Thank you!</strong><br>
            We'll consider adding "${word}" to our collection.
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => message.remove(), 300);
    }, 4000);
}

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);
